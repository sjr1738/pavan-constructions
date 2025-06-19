const express = require('express');
const cors = require('cors');
const multer = require('multer');

const app = express();
const PORT = process.env.PORT || 3001;
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const Gallery = require('./models/Gallery');
const Contact = require('./models/Contact');

const credentialsFile = path.join(__dirname, 'adminCredentials.json');
const galleryDir = path.join(__dirname, 'gallery');

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/pavan_gallery');


// Ensure gallery directory exists
if (!fs.existsSync(galleryDir)) {
  fs.mkdirSync(galleryDir);
}

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, galleryDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

// Helper to read credentials from file
function readAdminCredentials() {
  if (!fs.existsSync(credentialsFile)) {
    return { username: 'admin', password: 'pavantechno2024' };
  }
  const raw = fs.readFileSync(credentialsFile);
  return JSON.parse(raw);
}



// Helper to write credentials to file
function writeAdminCredentials(creds) {
  fs.writeFileSync(credentialsFile, JSON.stringify(creds, null, 2));
}

// --- Gallery Endpoints (MongoDB) ---
// Upload image and create gallery project
app.post('/api/gallery', upload.single('image'), async (req, res) => {
  try {
    const { title, description, type, year, location } = req.body;
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
    const newProject = new Gallery({
      title,
      description,
      image: `/gallery/${req.file.filename}`,
      type,
      year,
      location
    });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all gallery projects
app.get('/api/gallery', async (req, res) => {
  try {
    const projects = await Gallery.find().sort({ _id: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update project details (with optional image)
app.put('/api/gallery/:id', upload.single('image'), async (req, res) => {
  try {
    const { title, description, type, year, location } = req.body;
    const updateData = { title, description, type, year, location };
    if (req.file) {
      // New image uploaded: delete old image file
      const project = await Gallery.findById(req.params.id);
      if (project && project.image) {
        const oldImagePath = path.join(galleryDir, path.basename(project.image));
        if (fs.existsSync(oldImagePath)) fs.unlinkSync(oldImagePath);
      }
      updateData.image = `/gallery/${req.file.filename}`;
    }
    const updated = await Gallery.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: 'Project not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete project
app.delete('/api/gallery/:id', async (req, res) => {
  try {
    const project = await Gallery.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ error: 'Project not found' });
    // Remove image file
    const imagePath = path.join(galleryDir, path.basename(project.image));
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }
    res.json({ message: 'Project deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Get all gallery images from MongoDB
app.get('/api/gallery', async (req, res) => {
  try {
    const galleryData = await Gallery.find();
    res.json(galleryData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update image/project details
app.put('/api/gallery/:id', (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  let galleryData = readGalleryData();
  const idx = galleryData.findIndex(img => img.id == id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  galleryData[idx] = { ...galleryData[idx], title, description };
  writeGalleryData(galleryData);
  res.json(galleryData[idx]);
});

// Delete image/project
app.delete('/api/gallery/:id', (req, res) => {
  const { id } = req.params;
  let galleryData = readGalleryData();
  const idx = galleryData.findIndex(img => img.id == id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  // Remove file
  const filePath = path.join(galleryDir, galleryData[idx].filename);
  if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
  galleryData.splice(idx, 1);
  writeGalleryData(galleryData);
  res.json({ success: true });
});



// Middleware to parse JSON
app.use(express.json());
app.use(cors());

// --- Contact Endpoints (MongoDB) ---
// Get all contacts
app.get('/api/data', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ date: -1 });
    res.json({ data: contacts });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add new contact
app.post('/api/data', async (req, res) => {
  try {
    const { name, email, phone, package: pkg, message } = req.body;
    const newContact = new Contact({
      name,
      email,
      phone,
      package: pkg,
      message
    });
    await newContact.save();
    res.status(201).json(newContact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update contact status
app.put('/api/data/:id', async (req, res) => {
  try {
    const { status } = req.body;
    const updated = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: 'Contact not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete contact
app.delete('/api/data/:id', async (req, res) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Contact not found' });
    res.json({ message: 'Contact deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- Admin credentials API ---
// GET admin credentials (for checking - do NOT expose password in production)
app.get('/api/admin-credentials', (req, res) => {
  const { username } = readAdminCredentials();
  res.json({ username });
});
// POST update admin credentials
app.post('/api/admin-credentials', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }
  writeAdminCredentials({ username, password });
  res.json({ message: 'Admin credentials updated successfully.' });
});


// Multer setup for assets upload
const assetsDir = path.join(__dirname, '../src/assets');
const assetsStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, assetsDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const assetsUpload = multer({
  storage: assetsStorage,
  fileFilter: (req, file, cb) => {
    const allowed = ['image/jpeg', 'image/png', 'image/gif', 'image/jpg'];
    if (allowed.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  }
});

// Endpoint to upload asset to src/assets
app.post('/api/assets/upload', assetsUpload.single('asset'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded or invalid file type' });
  }
  res.json({ message: 'File uploaded successfully', filename: req.file.filename, url: `/assets/${req.file.filename}` });
});

// Endpoint to list all files in src/assets for admin gallery
app.get('/api/assets', (req, res) => {
  const assetsDir = path.join(__dirname, '../src/assets');
  fs.readdir(assetsDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read assets directory' });
    }
    // Only return files (skip directories)
    const fileList = files.filter(file => fs.statSync(path.join(assetsDir, file)).isFile())
      .map(file => ({
        filename: file,
        url: `/assets/${file}`
      }));
    res.json(fileList);
  });
});

// POST endpoint to receive data from frontend
app.post('/api/data', (req, res) => {
    const receivedData = req.body;
    console.log('Received data:', receivedData);
    savedData.push(receivedData); // Store the data
    res.json({ message: 'Data received successfully', data: receivedData });
});

// GET endpoint to return all saved data
app.get('/api/data', (req, res) => {
    res.json({ data: savedData });
});

// HTML page to display all saved data
app.get('/data-view', (req, res) => {
    let html = `<!DOCTYPE html><html><head><title>All Saved Data</title><style>body{font-family:sans-serif;padding:2rem;}table{border-collapse:collapse;width:100%;}th,td{border:1px solid #ccc;padding:8px;text-align:left;}th{background:#f5f5f5;}</style></head><body><h2>All Saved Data</h2>`;
    if (savedData.length === 0) {
        html += '<p>No data found.</p>';
    } else {
        html += '<table><thead><tr>';
        // Get all unique keys from all objects
        const keys = Array.from(new Set(savedData.flatMap(obj => Object.keys(obj))));
        keys.forEach(key => {
            html += `<th>${key}</th>`;
        });
        html += '</tr></thead><tbody>';
        savedData.forEach(row => {
            html += '<tr>';
            keys.forEach(key => {
                html += `<td>${row[key] !== undefined ? row[key] : ''}</td>`;
            });
            html += '</tr>';
        });
        html += '</tbody></table>';
    }
    html += '</body></html>';
    res.send(html);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
