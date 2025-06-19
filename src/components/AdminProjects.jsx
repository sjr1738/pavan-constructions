import React, { useEffect, useState } from 'react';

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'pavantechno2024';

const AdminProjects = () => {
  const [gallery, setGallery] = useState([]);
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [assetsError, setAssetsError] = useState(null);

  // Admin auth state
  const [loggedIn, setLoggedIn] = useState(() => !!localStorage.getItem('adminLoggedIn'));
  const [loginError, setLoginError] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Asset upload state
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(null);

  // Edit state
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    title: '', description: '', type: '', year: '', location: '', image: null
  });

  // New project form state
  const [newProject, setNewProject] = useState({
    title: '', description: '', type: '', year: '', location: '', image: null
  });
  const [newProjectError, setNewProjectError] = useState(null);
  const [newProjectSuccess, setNewProjectSuccess] = useState(null);

  // Fetch gallery data
  const fetchGallery = () => {
    fetch('/api/gallery')
      .then(res => res.json())
      .then(data => {
        setGallery(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch project data');
        setLoading(false);
      });
  };
  useEffect(() => {
    if (loggedIn) fetchGallery();
  }, [loggedIn]);

  // Fetch assets data
  const fetchAssets = () => {
    fetch('/api/assets')
      .then(res => res.json())
      .then(data => setAssets(data))
      .catch(() => setAssetsError('Failed to fetch assets'));
  };
  useEffect(() => {
    if (loggedIn) fetchAssets();
  }, [loggedIn]);

  // Delete a project
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;
    try {
      const res = await fetch(`/api/gallery/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setGallery(gallery.filter(item => item._id !== id));
      } else {
        alert('Failed to delete project');
      }
    } catch {
      alert('Error deleting project');
    }
  };

  // Start editing a project
  const handleEdit = (id) => {
    const item = gallery.find(g => g._id === id);
    setEditingId(id);
    setEditForm({
      title: item.title || '',
      description: item.description || '',
      type: item.type || '',
      year: item.year || '',
      location: item.location || '',
      image: null
    });
  };

  // Submit project edit (with optional image)
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', editForm.title);
      formData.append('description', editForm.description);
      formData.append('type', editForm.type);
      formData.append('year', editForm.year);
      formData.append('location', editForm.location);
      if (editForm.image) {
        formData.append('image', editForm.image);
      }
      const res = await fetch(`/api/gallery/${editingId}`, {
        method: 'PUT',
        body: formData
      });
      if (res.ok) {
        fetchGallery();
        setEditingId(null);
      } else {
        alert('Failed to update project');
      }
    } catch {
      alert('Error updating project');
    }
  };

  // Handle edit form changes
  const handleEditChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setEditForm({ ...editForm, image: files[0] });
    } else {
      setEditForm({ ...editForm, [name]: value });
    }
  };

  // Handle new project form changes
  const handleNewProjectChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setNewProject({ ...newProject, image: files[0] });
    } else {
      setNewProject({ ...newProject, [name]: value });
    }
  };

  // Submit new project
  const handleNewProjectSubmit = async (e) => {
    e.preventDefault();
    setNewProjectError(null);
    setNewProjectSuccess(null);
    const formData = new FormData();
    formData.append('title', newProject.title);
    formData.append('description', newProject.description);
    formData.append('type', newProject.type);
    formData.append('year', newProject.year);
    formData.append('location', newProject.location);
    if (newProject.image) {
      formData.append('image', newProject.image);
    }
    try {
      const res = await fetch('/api/gallery', {
        method: 'POST',
        body: formData
      });
      if (res.ok) {
        setNewProject({ title: '', description: '', type: '', year: '', location: '', image: null });
        setNewProjectSuccess('Project uploaded successfully!');
        fetchGallery();
      } else {
        setNewProjectError('Failed to upload project');
      }
    } catch {
      setNewProjectError('Failed to upload project');
    }
  };

  // Admin login
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setLoggedIn(true);
      localStorage.setItem('adminLoggedIn', '1');
      setLoginError(null);
    } else {
      setLoginError('Invalid credentials');
    }
  };
  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem('adminLoggedIn');
  };

  // Upload asset
  const handleAssetUpload = async (e) => {
    e.preventDefault();
    setUploading(true);
    setUploadError(null);
    setUploadSuccess(null);
    const file = e.target.asset.files[0];
    if (!file) {
      setUploadError('No file selected');
      setUploading(false);
      return;
    }
    const formData = new FormData();
    formData.append('asset', file);
    try {
      const res = await fetch('/api/assets/upload', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      if (res.ok) {
        setUploadSuccess('File uploaded successfully!');
        fetchAssets();
      } else {
        setUploadError(data.error || 'Upload failed');
      }
    } catch {
      setUploadError('Upload failed');
    }
    setUploading(false);
    e.target.reset();
  };

  if (!loggedIn) {
    return (
      <div style={{ padding: 24, maxWidth: 400, margin: '40px auto', border: '1px solid #ccc', borderRadius: 8 }}>
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: 12 }}>
            <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
          </div>
          <div style={{ marginBottom: 12 }}>
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          <button type="submit">Login</button>
          {loginError && <div style={{ color: 'red', marginTop: 8 }}>{loginError}</div>}
        </form>
      </div>
    );
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div style={{ padding: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Admin Project Management</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>

      <div style={{ marginBottom: 32 }}>
        <h3>Upload New Asset (Frontend)</h3>
        <form onSubmit={handleAssetUpload}>
          <input type="file" name="asset" accept="image/*" required />
          <button type="submit" disabled={uploading} style={{ marginLeft: 8 }}>
            {uploading ? 'Uploading...' : 'Upload'}
          </button>
        </form>
        {uploadError && <div style={{ color: 'red' }}>{uploadError}</div>}
        {uploadSuccess && <div style={{ color: 'green' }}>{uploadSuccess}</div>}
      </div>

      <div style={{ marginBottom: 32 }}>
        <h3>Assets in src/assets (Frontend)</h3>
        {assetsError && <div style={{ color: 'red' }}>{assetsError}</div>}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
          {assets.map(asset => (
            <div key={asset.filename} style={{ textAlign: 'center' }}>
              <img
                src={require(`../assets/${asset.filename}`)}
                alt={asset.filename}
                width={100}
                style={{ border: '1px solid #ccc', borderRadius: 4 }}
              />
              <div style={{ marginTop: 8 }}>{asset.filename}</div>
            </div>
          ))}
        </div>
      </div>

      {/* New Project Upload Form */}
      <div style={{ margin: '32px 0', padding: 24, border: '1px solid #ddd', borderRadius: 8, background: '#fafbfc', maxWidth: 600 }}>
        <h3 style={{ marginBottom: 16 }}>Add New Project to Gallery</h3>
        <form onSubmit={handleNewProjectSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ display: 'flex', gap: 16 }}>
            <div style={{ flex: 1 }}>
              <label htmlFor="project-title" style={{ fontWeight: 500 }}>Title<span style={{ color: 'red' }}> *</span></label>
              <input id="project-title" name="title" value={newProject.title} onChange={handleNewProjectChange} placeholder="Project Title" required style={{ width: '100%', padding: 6 }} />
            </div>
            <div style={{ flex: 1 }}>
              <label htmlFor="project-type" style={{ fontWeight: 500 }}>Type</label>
              <input id="project-type" name="type" value={newProject.type} onChange={handleNewProjectChange} placeholder="e.g. Residential, Commercial" style={{ width: '100%', padding: 6 }} />
            </div>
          </div>
          <div style={{ display: 'flex', gap: 16 }}>
            <div style={{ flex: 1 }}>
              <label htmlFor="project-year" style={{ fontWeight: 500 }}>Year</label>
              <input id="project-year" name="year" value={newProject.year} onChange={handleNewProjectChange} placeholder="e.g. 2024" style={{ width: '100%', padding: 6 }} />
            </div>
            <div style={{ flex: 1 }}>
              <label htmlFor="project-location" style={{ fontWeight: 500 }}>Location</label>
              <input id="project-location" name="location" value={newProject.location} onChange={handleNewProjectChange} placeholder="City, State" style={{ width: '100%', padding: 6 }} />
            </div>
          </div>
          <div>
            <label htmlFor="project-description" style={{ fontWeight: 500 }}>Description<span style={{ color: 'red' }}> *</span></label>
            <textarea id="project-description" name="description" value={newProject.description} onChange={handleNewProjectChange} placeholder="Short description of the project" required rows={2} style={{ width: '100%', padding: 6, resize: 'vertical' }} />
          </div>
          <div>
            <label htmlFor="project-image" style={{ fontWeight: 500 }}>Project Image<span style={{ color: 'red' }}> *</span></label>
            <input id="project-image" name="image" type="file" accept="image/*" onChange={handleNewProjectChange} required style={{ display: 'block', marginTop: 4 }} />
            <small style={{ color: '#555' }}>Upload a clear image (JPG, PNG, etc). Max size: 5MB.</small>
          </div>
          <button type="submit" style={{ marginTop: 8, padding: '8px 0', background: '#2c3e50', color: 'white', border: 'none', borderRadius: 4, fontWeight: 600, fontSize: 16, cursor: 'pointer' }}>
            {loading ? 'Uploading...' : 'Add Project'}
          </button>
        </form>
        {newProjectError && <div style={{ color: 'red', marginTop: 8 }}>{newProjectError}</div>}
        {newProjectSuccess && <div style={{ color: 'green', marginTop: 8 }}>{newProjectSuccess}</div>}
      </div>

      {/* Projects table */}
      <table border="1" cellPadding="8" cellSpacing="0" style={{ width: '100%', marginTop: 16 }}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Type</th>
            <th>Year</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {gallery.map(item => (
            editingId === item._id ? (
              <tr key={item._id} style={{ background: '#f9f9f9' }}>
                <td colSpan={7}>
                  <form onSubmit={handleEditSubmit} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <input name="title" value={editForm.title} onChange={handleEditChange} placeholder="Title" required />
                    <input name="description" value={editForm.description} onChange={handleEditChange} placeholder="Description" required />
                    <input name="type" value={editForm.type} onChange={handleEditChange} placeholder="Type" />
                    <input name="year" value={editForm.year} onChange={handleEditChange} placeholder="Year" />
                    <input name="location" value={editForm.location} onChange={handleEditChange} placeholder="Location" />
                    <input name="image" type="file" accept="image/*" onChange={handleEditChange} />
                    <button type="submit">Save</button>
                    <button type="button" onClick={() => setEditingId(null)} style={{ color: 'red' }}>Cancel</button>
                  </form>
                </td>
              </tr>
            ) : (
              <tr key={item._id}>
                <td><img src={item.image} alt={item.title} width={100} /></td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.type}</td>
                <td>{item.year}</td>
                <td>{item.location}</td>
                <td>
                  <button onClick={() => handleEdit(item._id)}>Edit</button>
                  <button onClick={() => handleDelete(item._id)} style={{ marginLeft: 8, color: 'red' }}>Delete</button>
                </td>
              </tr>
            )
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProjects;
