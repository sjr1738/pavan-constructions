import React, { useState, useEffect } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { FaBuilding, FaChartLine, FaSignOutAlt, FaUser, FaLock, FaSave, FaTimes, FaUpload, FaEdit, FaTrash, FaPlus, FaImage, FaEnvelope, FaPhone, FaSearch, FaProjectDiagram } from 'react-icons/fa';

// Inline AdminProjects logic for Projects tab
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'pavantechno2024';

const AdminDashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [modalMode, setModalMode] = useState('add'); // 'add' or 'edit'
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectList, setProjectList] = useState([]);
  const [contactList, setContactList] = useState([]);
  const [credentials, setCredentials] = useState({
    username: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
const [backendPassword, setBackendPassword] = useState(''); // For password check only (not shown in UI)
  const [profileMessage, setProfileMessage] = useState({ text: '', type: '' });
  const [projectMessage, setProjectMessage] = useState({ text: '', type: '' });
  const [newProject, setNewProject] = useState({
    id: '',
    title: '',
    type: 'residential',
    description: '',
    year: new Date().getFullYear().toString(),
    location: '',
    image: null,
    imagePreview: null
  });
  const [activeFilter, setActiveFilter] = useState(null);
  
  // Separate error states for projects and contacts
  const [projectFetchError, setProjectFetchError] = useState(null);
  const [contactFetchError, setContactFetchError] = useState(null);
  useEffect(() => {
    const adminToken = localStorage.getItem('adminToken');
    if (!adminToken) {
      setIsLoggedIn(false);
    }
    setLoading(true);
    setProjectFetchError(null);
    setContactFetchError(null);
    // Fetch admin username from backend
    fetch('http://localhost:3001/api/admin-credentials')
      .then(res => res.json())
      .then(result => {
        setCredentials(prev => ({ ...prev, username: result.username || '' }));
        fetch('http://localhost:3001/adminCredentials.json')
          .then(r => r.json())
          .then(json => setBackendPassword(json.password));
      });
    // Fetch gallery projects from backend
    fetch('http://localhost:3001/api/gallery')
      .then(res => res.json())
      .then(data => {
        setProjectList(data);
        setLoading(false);
      })
      .catch(err => {
        setProjectFetchError('Failed to fetch gallery data');
        setLoading(false);
      });
    // Fetch contact inquiries from backend
    fetch('http://localhost:3001/api/data')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch contact data');
        return res.json();
      })
      .then(result => {
        setContactList(result.data || []);
        setLoading(false);
      })
      .catch(err => {
        setContactFetchError('Error loading contact data: ' + err.message);
        setContactList([]);
        setLoading(false);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsLoggedIn(false);
  };

  const handleCredentialChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUsernameUpdate = async (e) => {
    e.preventDefault();
    if (!credentials.username || credentials.username.length < 4) {
      setProfileMessage({ text: 'Username must be at least 4 characters', type: 'error' });
      return;
    }
    try {
      const res = await fetch('http://localhost:3001/api/admin-credentials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: credentials.username, password: backendPassword })
      });
      if (!res.ok) throw new Error('Failed to update username');
      setProfileMessage({ text: 'Username updated successfully!', type: 'success' });
    } catch (err) {
      setProfileMessage({ text: 'Failed to update username: ' + err.message, type: 'error' });
    }
    setTimeout(() => {
      setProfileMessage({ text: '', type: '' });
    }, 3000);
  };

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    if (!credentials.currentPassword || !credentials.newPassword || !credentials.confirmPassword) {
      setProfileMessage({ text: 'Please fill in all password fields', type: 'error' });
      return;
    }
    if (credentials.newPassword.length < 8) {
      setProfileMessage({ text: 'New password must be at least 8 characters', type: 'error' });
      return;
    }
    if (credentials.newPassword !== credentials.confirmPassword) {
      setProfileMessage({ text: 'New passwords do not match', type: 'error' });
      return;
    }
    // Check current password matches backend (simulate)
    if (credentials.currentPassword !== backendPassword) {
      setProfileMessage({ text: 'Current password is incorrect', type: 'error' });
      return;
    }
    try {
      const res = await fetch('http://localhost:3001/api/admin-credentials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: credentials.username, password: credentials.newPassword })
      });
      if (!res.ok) throw new Error('Failed to update password');
      setProfileMessage({ text: 'Password updated successfully!', type: 'success' });
      setBackendPassword(credentials.newPassword); // update locally
      setCredentials(prev => ({
        ...prev,
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      }));
    } catch (err) {
      setProfileMessage({ text: 'Failed to update password: ' + err.message, type: 'error' });
    }
    setTimeout(() => {
      setProfileMessage({ text: '', type: '' });
    }, 3000);
  };

  const handleProjectChange = (e) => {
    const { name, value } = e.target;
    setNewProject(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProject(prev => ({
          ...prev,
          image: file,
          imagePreview: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const openAddProjectModal = () => {
    setModalMode('add');
    setNewProject({
      id: `P-${new Date().getFullYear()}-${Math.floor(Math.random() * 100)}`,
      title: '',
      type: 'residential',
      description: '',
      year: new Date().getFullYear().toString(),
      location: '',
      image: null,
      imagePreview: null
    });
    setProjectMessage({ text: '', type: '' });
    setShowProjectModal(true);
  };

  const openEditProjectModal = (project) => {
    setModalMode('edit');
    setNewProject({
      ...project,
      imagePreview: project.image
    });
    setSelectedProject(project);
    setProjectMessage({ text: '', type: '' });
    setShowProjectModal(true);
  };

  // Proper async function for handling add/edit
  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    if (!newProject.title || !newProject.description) {
      setProjectMessage({ text: 'Please fill in all required fields', type: 'error' });
      return;
    }
    try {
      let res;
      if (modalMode === 'add') {
        // Upload new gallery image/project
        const formData = new FormData();
        formData.append('title', newProject.title);
        formData.append('description', newProject.description);
        if (newProject.image) formData.append('image', newProject.image);
        res = await fetch('http://localhost:3001/api/gallery', {
          method: 'POST',
          body: formData
        });
        if (!res.ok) throw new Error('Failed to upload project');
        setProjectMessage({ text: 'Project added successfully!', type: 'success' });
      } else {
        // Edit existing gallery image/project
        res = await fetch(`http://localhost:3001/api/gallery/${selectedProject.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: newProject.title,
            description: newProject.description
          })
        });
        if (!res.ok) throw new Error('Failed to update project');
        setProjectMessage({ text: 'Project updated successfully!', type: 'success' });
      }
      // Refresh gallery/project list
      const galleryRes = await fetch('http://localhost:3001/api/gallery');
      const galleryData = await galleryRes.json();
      setProjectList(galleryData);
      setShowProjectModal(false);
    } catch (err) {
      setProjectMessage({ text: err.message, type: 'error' });
    }
    setTimeout(() => setProjectMessage({ text: '', type: '' }), 2000);
  };

  const handleContactStatusChange = (contactId, newStatus) => {
    setContactList(prev => 
      prev.map(contact => 
        contact.id === contactId 
          ? { ...contact, status: newStatus } 
          : contact
      )
    );
  };

  const handleDeleteContact = (contactId) => {
    if (window.confirm('Are you sure you want to delete this contact inquiry?')) {
      setContactList(prev => prev.filter(c => c.id !== contactId));
    }
  };

  if (!isLoggedIn) {
    return <Navigate to="/admin" />;
  }

  // Professional table cell styles for contact details
const tableThStyle = {
  padding: '12px 16px',
  borderBottom: '2px solid #eee',
  background: '#f5f7fa',
  color: '#222',
  fontWeight: 600,
  textAlign: 'left',
  fontSize: '1em'
};
const tableTdStyle = {
  padding: '10px 14px',
  fontSize: '0.98em',
  color: '#333',
  background: '#fff',
  verticalAlign: 'top'
};
const actionBtnStyle = {
  marginRight: 8,
  padding: '4px 10px',
  border: 'none',
  borderRadius: '6px',
  background: '#e9ecef',
  color: '#23408e',
  cursor: 'pointer',
  fontSize: '0.97em',
  fontWeight: 500
};

// Filter contacts based on active filter
const filteredContacts = activeFilter 
  ? contactList.filter(contact => contact.status === activeFilter)
  : contactList;

  // Sample data for dashboard
  const dashboardData = {
    projects: {
      total: projectList.length,
      residential: projectList.filter(p => p.type === 'residential').length,
      commercial: projectList.filter(p => p.type === 'commercial').length,
      interior: projectList.filter(p => p.type === 'interior').length,
      inProgress: 12,
      completed: 53
    },
    contacts: {
      total: contactList.length,
      unread: contactList.filter(c => c.status === 'unread').length,
      read: contactList.filter(c => c.status === 'read').length,
      replied: contactList.filter(c => c.status === 'replied').length
    },
    revenue: {
      monthly: "₹32,50,000",
      quarterly: "₹98,75,000",
      yearly: "₹3,85,00,000"
    },
    recentProjects: projectList.slice(0, 4),
    recentContacts: contactList.filter(c => c.status === 'unread').slice(0, 3)
  };

  return (
    <div className="admin-dashboard-container">
      {/* Sidebar */}
      <div className="admin-sidebar">
        <div className="admin-brand">
          <h2>Pavan Techno</h2>
          <p>Admin Panel</p>
        </div>
        
        <nav className="admin-nav">
          <ul>
            <li className={activeTab === 'overview' ? 'active' : ''} onClick={() => setActiveTab('overview')}>
              <FaChartLine /> <span>Overview</span>
            </li>
            <li className={activeTab === 'projects' ? 'active' : ''} onClick={() => setActiveTab('projects')}>
              <FaBuilding /> <span>Projects</span>
            </li>
            <li className={activeTab === 'contacts' ? 'active' : ''} onClick={() => setActiveTab('contacts')}>
              <FaEnvelope /> <span>Contact Details</span>
              {dashboardData.contacts.unread > 1 && (
                <span className="notification-badge">{dashboardData.contacts.unread}</span>
              )}
            </li>
          </ul>
        </nav>
        
        <div className="admin-logout" onClick={handleLogout}>
          <FaSignOutAlt /> <span>Logout</span>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="admin-main">
        {/* Header */}
        <div className="admin-header">
          <h1>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
          <div className="admin-user" onClick={() => setShowProfileModal(true)}>
            <span>{credentials.username}</span>
            <div className="admin-avatar">
              {credentials.username.charAt(0).toUpperCase()}
            </div>
          </div>
        </div>
        
        {/* Content Area */}
        <div className="admin-content">
          {loading ? (
            <div className="admin-loading">
              <div className="spinner"></div>
              <p>Loading dashboard data...</p>
            </div>
          ) : (
            <>
              {activeTab === 'overview' && (
                <div className="overview-content">
                  {/* Stats Cards */}
                  <div className="stats-grid">
                    <div className="stat-card">
                      <div className="stat-icon projects-icon"><FaBuilding /></div>
                      <div className="stat-details">
                        <h3>Total Projects</h3>
                        <p className="stat-value">{dashboardData.projects.total}</p>
                        <p className="stat-info">
                          <span className="highlight">{dashboardData.projects.inProgress}</span> in progress
                        </p>
                      </div>
                    </div>
                    
                    <div className="stat-card">
                      <div className="stat-icon revenue-icon"><FaChartLine /></div>
                      <div className="stat-details">
                        <h3>Monthly Revenue</h3>
                        <p className="stat-value">{dashboardData.revenue.monthly}</p>
                        <p className="stat-info">
                          <span className="highlight">Yearly: {dashboardData.revenue.yearly}</span>
                        </p>
                      </div>
                    </div>
                    
                    <div className="stat-card">
                      <div className="stat-icon contacts-icon"><FaEnvelope /></div>
                      <div className="stat-details">
                        <h3>Contact Inquiries</h3>
                        <p className="stat-value">{dashboardData.contacts.total}</p>
                        <p className="stat-info">
                          <span className="highlight">{dashboardData.contacts.unread}</span> unread messages
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Recent Projects */}
                  <div className="admin-panel">
                    <div className="panel-header">
                      <h3>Recent Projects</h3>
                      <button className="view-all-btn" onClick={() => setActiveTab('projects')}>View All</button>
                    </div>
                    <div className="panel-content">
                      <table className="admin-table">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Project Name</th>
                            <th>Type</th>
                            <th>Location</th>
                            <th>Year</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {dashboardData.recentProjects.map(project => (
                            <tr key={project.id}>
                              <td>{project.id}</td>
                              <td>{project.title}</td>
                              <td>{project.type.charAt(0).toUpperCase() + project.type.slice(1)}</td>
                              <td>{project.location}</td>
                              <td>{project.year}</td>
                              <td>
                                <div className="action-buttons">
                                  <button 
                                    className="action-btn edit-btn" 
                                    onClick={() => openEditProjectModal(project)}
                                    title="Edit Project"
                                  >
                                    <FaEdit />
                                  </button>
                                  <button 
                                    className="action-btn delete-btn" 
                                    onClick={() => handleDeleteProject(project.id)}
                                    title="Delete Project"
                                  >
                                    <FaTrash />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  {/* Recent Contacts */}
                  {dashboardData.contacts.unread > 0 && (
                    <div className="admin-panel">
                      <div className="panel-header">
                        <h3>Unread Messages</h3>
                        <button className="view-all-btn" onClick={() => setActiveTab('contacts')}>View All</button>
                      </div>
                      <div className="panel-content">
                        <div className="contact-cards">
                          {dashboardData.recentContacts.map(contact => (
                            <div className="contact-card" key={contact.id}>
                              <div className="contact-info">
                                <h4>{contact.name}</h4>
                                <p>{contact.email}</p>
                                <p>{contact.phone}</p>
                              </div>
                              <div className="contact-message">
                                <h5>{contact.subject}</h5>
                                <p>{contact.message}</p>
                              </div>
                              <div className="contact-actions">
                                <button 
                                  className="btn btn-primary" 
                                  onClick={() => handleContactStatusChange(contact.id, 'read')}
                                >
                                  Mark as Read
                                </button>
                                <button 
                                  className="btn btn-danger" 
                                  onClick={() => handleDeleteContact(contact.id)}
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              {activeTab === 'projects' && (
  <div className="projects-content">
    {projectFetchError && (
      <div className="error-message" style={{color: 'red', margin: '1rem 0'}}>
        {projectFetchError}
      </div>
    )}
    <div className="projects-header">
      <h2>Project Management</h2>
      <button className="btn btn-primary add-btn" onClick={openAddProjectModal}>
        <FaPlus /> Add New Project
      </button>
    </div>
    {showProjectModal && (
      <div className="modal-overlay">
        <div className="modal-card">
          <h3>{modalMode === 'add' ? 'Add New Project' : 'Edit Project'}</h3>
          <form onSubmit={handleProjectSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <input
              name="title"
              value={newProject.title}
              onChange={e => setNewProject({ ...newProject, title: e.target.value })}
              placeholder="Title"
              required
            />
            <textarea
              name="description"
              value={newProject.description}
              onChange={e => setNewProject({ ...newProject, description: e.target.value })}
              placeholder="Description"
              required
            />
            <input
              name="type"
              value={newProject.type}
              onChange={e => setNewProject({ ...newProject, type: e.target.value })}
              placeholder="Type (residential, commercial, etc.)"
            />
            <input
              name="year"
              value={newProject.year}
              onChange={e => setNewProject({ ...newProject, year: e.target.value })}
              placeholder="Year"
            />
            <input
              name="location"
              value={newProject.location}
              onChange={e => setNewProject({ ...newProject, location: e.target.value })}
              placeholder="Location"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            {newProject.imagePreview && (
              <img src={newProject.imagePreview} alt="Preview" style={{ width: 120, margin: '0 auto' }} />
            )}
            {projectMessage.text && (
              <div style={{ color: projectMessage.type === 'error' ? 'red' : 'green', marginBottom: 8 }}>{projectMessage.text}</div>
            )}
            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
              <button type="button" onClick={() => setShowProjectModal(false)} style={{ background: '#eee', color: '#333' }}>Cancel</button>
              <button type="submit" className="btn btn-primary">{modalMode === 'add' ? 'Add Project' : 'Save Changes'}</button>
            </div>
          </form>
        </div>
      </div>
    )}
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '18px 0 12px 0' }}>
      <h3 style={{ margin: 0 }}>Current Gallery Projects</h3>
      <button className="btn btn-secondary" onClick={() => {
        setLoading(true);
        fetch('http://localhost:3001/api/gallery')
          .then(res => res.json())
          .then(data => {
            setProjectList(data);
            setLoading(false);
          })
          .catch(() => setLoading(false));
      }} style={{ padding: '5px 14px', fontSize: 15 }}>
        Refresh
      </button>
    </div>
    <div className="projects-grid">
      {projectList.map(project => (
        <div className="project-card" key={project.id || project._id}>
          <div className="project-image">
            <img src={project.image} alt={project.title} />
            <div className="project-actions">
              <button
                className="project-action-btn edit-btn"
                onClick={() => openEditProjectModal(project)}
                title="Edit Project"
              >
                <FaEdit />
              </button>
              <button
                className="project-action-btn delete-btn"
                onClick={() => handleDeleteProject(project.id || project._id)}
                title="Delete Project"
              >
                <FaTrash />
              </button>
            </div>
          </div>
          <div className="project-details">
            <h3>{project.title}</h3>
            <div className="project-meta">
              <span className="project-type">{project.type && project.type.charAt(0).toUpperCase() + project.type.slice(1)}</span>
              <span className="project-year">{project.year}</span>
            </div>
            <p className="project-location">{project.location}</p>
            <p className="project-description">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)}
              
              {activeTab === 'contacts' && (
  <div className="contacts-content">
    {contactFetchError ? (
      <div className="error-message" style={{color: 'red', margin: '1rem 0'}}>
        {contactFetchError}
      </div>
    ) : (
      <React.Fragment>
        <div className="contacts-header">
          <div className="header-content">
            <h2>Contact Details</h2>
            <p className="section-description">View and manage all user-submitted contact inquiries.</p>
          </div>
          <div className="header-actions">
            {/* You can add search/filter functionality here if desired */}
          </div>
        </div>
        <div className="contacts-table-container" style={{overflowX: 'auto', marginTop: '2rem'}}>
          {loading ? (
            <div style={{textAlign: 'center', padding: '2rem'}}>
              <div className="spinner"></div>
              <p>Loading contact data...</p>
            </div>
          ) : filteredContacts.length === 0 ? (
            <div className="empty-state" style={{textAlign: 'center', margin: '2rem 0'}}>
              <div className="empty-icon" style={{fontSize: '2rem', color: '#888'}}><FaEnvelope /></div>
              <h3>No inquiries found</h3>
              <p>There are no contact inquiries matching your current filter.</p>
            </div>
          ) : (
            <table className="contacts-table" style={{width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.07)'}}>
              <thead style={{background: '#f5f7fa'}}>
                <tr>
                  <th style={tableThStyle}>#</th>
                  <th style={tableThStyle}>Name</th>
                  <th style={tableThStyle}>Email</th>
                  <th style={tableThStyle}>Phone</th>
                  <th style={tableThStyle}>Package</th>
                  <th style={tableThStyle}>Message</th>
                  <th style={tableThStyle}>Date</th>
                  <th style={tableThStyle}>Status</th>
                  <th style={tableThStyle}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredContacts.map((contact, idx) => (
                  <tr key={contact.id || idx} style={{borderBottom: '1px solid #eee'}}>
                    <td style={tableTdStyle}>{idx + 1}</td>
                    <td style={tableTdStyle}>{contact.name}</td>
                    <td style={tableTdStyle}>{contact.email}</td>
                    <td style={tableTdStyle}>{contact.phone}</td>
                    <td style={tableTdStyle}>{contact.package}</td>
                    <td style={{...tableTdStyle, maxWidth: 250, whiteSpace: 'pre-line', wordBreak: 'break-word'}}>{contact.message}</td>
                    <td style={tableTdStyle}>{contact.date || '-'}</td>
                    <td style={tableTdStyle}>
                      <span className={`status-badge ${contact.status}`} style={{
                        padding: '4px 10px',
                        borderRadius: '12px',
                        background: contact.status === 'unread' ? '#ffe3e3' : contact.status === 'replied' ? '#e3ffe8' : '#e3eaff',
                        color: contact.status === 'unread' ? '#d7263d' : contact.status === 'replied' ? '#218838' : '#23408e',
                        fontWeight: 500,
                        fontSize: '0.95em'
                      }}>{contact.status ? contact.status.charAt(0).toUpperCase() + contact.status.slice(1) : '-'}</span>
                    </td>
                    <td style={tableTdStyle}>
                      {contact.status === 'unread' && (
                        <button className="action-btn read-btn" style={actionBtnStyle} onClick={() => handleContactStatusChange(contact.id, 'read')} title="Mark as Read">Mark as Read</button>
                      )}
                      {contact.status !== 'replied' && (
                        <button className="action-btn reply-btn" style={actionBtnStyle} onClick={() => handleContactStatusChange(contact.id, 'replied')} title="Mark as Replied">Mark as Replied</button>
                      )}
                      <button className="action-btn delete-btn" style={actionBtnStyle} onClick={() => handleDeleteContact(contact.id)} title="Delete Inquiry">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </React.Fragment>
    )}
  </div>
)}
            </>
          )}
        </div>
      </div>

      {/* Profile Modal */}
      {showProfileModal && (
        <div className="modal-overlay">
          <div className="profile-modal">
            <div className="profile-modal-header">
              <h2>Admin Profile</h2>
              <button className="close-btn" onClick={() => setShowProfileModal(false)}>
                <FaTimes />
              </button>
            </div>

            {profileMessage.text && (
              <div className={`profile-message ${profileMessage.type}`}>
                {profileMessage.text}
              </div>
            )}

            <div className="profile-content">
              {/* Username Form */}
              <div className="profile-section">
                <h3><FaUser /> Update Username</h3>
                <form onSubmit={handleUsernameUpdate}>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={credentials.username}
                      onChange={handleCredentialChange}
                      placeholder="Enter username"
                      required
                      autoComplete="off"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    <FaSave /> Update Username
                  </button>
                </form>
              </div>

              {/* Password Form */}
              <div className="profile-section">
                <h3><FaLock /> Change Password</h3>
                <form onSubmit={handlePasswordUpdate}>
                  <div className="form-group">
                    <label htmlFor="currentPassword">Current Password</label>
                    <input
                      type="password"
                      id="currentPassword"
                      name="currentPassword"
                      value={credentials.currentPassword}
                      onChange={handleCredentialChange}
                      placeholder="Enter current password"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="newPassword">New Password</label>
                    <input
                      type="password"
                      id="newPassword"
                      name="newPassword"
                      value={credentials.newPassword}
                      onChange={handleCredentialChange}
                      placeholder="Enter new password"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm New Password</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={credentials.confirmPassword}
                      onChange={handleCredentialChange}
                      placeholder="Confirm new password"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    <FaSave /> Update Password
                  </button>
                </form>
              </div>

              <div className="profile-footer">
                <button className="btn btn-danger" onClick={handleLogout}>
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        /* Reset and base styles */
        :root {
          --primary-color: #007bff;
          --primary-hover: #0056b3;
          --secondary-color: #6c757d;
          --success-color: #28a745;
          --danger-color: #dc3545;
          --warning-color: #ffc107;
          --info-color: #17a2b8;
          --light-color: #f8f9fa;
          --dark-color: #343a40;
          --border-color: #dee2e6;
          --border-radius: 8px;
          --box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          --transition: all 0.3s ease;
        }

        /* Contact Header and Filters styles */
        .contacts-content {
          padding: 1.5rem;
          background-color: #f8f9fa;
          border-radius: 12px;
          height: 100%;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }
        
        .contacts-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 2rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid #e9ecef;
        }
        
        .header-content h2 {
          margin: 0 0 0.75rem 0;
          color: #2c3e50;
          font-weight: 700;
          font-size: 2rem;
          position: relative;
        }
        
        .header-content h2:after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, var(--primary-color), #4dabf7);
          border-radius: 2px;
        }
        
        .section-description {
          color: #6c757d;
          margin: 1rem 0 0;
          font-size: 1.1rem;
          line-height: 1.5;
          max-width: 600px;
        }
        
        .header-actions {
          display: flex;
          align-items: center;
        }
        
        .search-container {
          position: relative;
          width: 300px;
        }
        
        .search-input {
          width: 100%;
          padding: 0.8rem 2.5rem 0.8rem 1.2rem;
          border: 1px solid #ced4da;
          border-radius: 8px;
          font-size: 0.95rem;
          transition: all 0.3s;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }
        
        .search-input:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
        }
        
        .search-btn {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          background: transparent;
          border: none;
          color: #6c757d;
          cursor: pointer;
          font-size: 1rem;
          padding: 0.25rem;
          border-radius: 4px;
          transition: var(--transition);
        }

        .search-btn:hover {
          color: var(--primary-color);
          background-color: rgba(0, 123, 255, 0.1);
        }
        
        /* Enhanced Filter Styles */
        .contacts-filters-container {
          margin-bottom: 2rem;
          background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
          border-radius: 16px;
          padding: 1.5rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          border: 1px solid rgba(0,0,0,0.05);
          position: relative;
          overflow: hidden;
        }

        .contacts-filters-container:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--primary-color), #4dabf7, #28a745, #ffc107);
          border-radius: 16px 16px 0 0;
        }
        
        .filters-title {
          font-size: 0.9rem;
          font-weight: 700;
          color: #495057;
          margin-bottom: 1.25rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .filters-title:before {
          content: '🎯';
          font-size: 1rem;
        }
        
        .contacts-filters {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          align-items: center;
        }
        
        .filter-btn {
          background: #ffffff;
          border: 2px solid #e9ecef;
          padding: 0.8rem 1.5rem;
          border-radius: 50px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #495057;
          min-width: 130px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          position: relative;
          overflow: hidden;
          text-decoration: none;
          user-select: none;
        }

        .filter-btn:before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }
        
        .filter-btn:hover {
          background: #f8f9fa;
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
          border-color: #ced4da;
        }

        .filter-btn:hover:before {
          left: 100%;
        }
        
        .filter-btn.active {
          background: linear-gradient(135deg, var(--primary-color) 0%, #0056b3 100%);
          color: white;
          border-color: var(--primary-color);
          box-shadow: 0 6px 20px rgba(0,123,255,0.4);
          transform: translateY(-2px);
        }
        
        .filter-btn.active:hover {
          background: linear-gradient(135deg, #0056b3 0%, #004085 100%);
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 8px 25px rgba(0,123,255,0.5);
        }
        
        .filter-icon {
          display: inline-block;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          flex-shrink: 0;
          position: relative;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .filter-icon.all {
          background: conic-gradient(from 0deg, #007bff 0deg 90deg, #6c757d 90deg 180deg, #28a745 180deg 270deg, #ffc107 270deg 360deg);
          animation: rotate 3s linear infinite;
        }

        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .filter-btn.active .filter-icon.all {
          animation-play-state: paused;
        }
        
        .filter-icon.unread {
          background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
          position: relative;
        }

        .filter-icon.unread:after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 4px;
          height: 4px;
          background: white;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        .filter-icon.read {
          background: linear-gradient(135deg, #6c757d 0%, #495057 100%);
          position: relative;
        }

        .filter-icon.read:after {
          content: '✓';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 8px;
          font-weight: bold;
        }
        
        .filter-icon.replied {
          background: linear-gradient(135deg, #28a745 0%, #1e7e34 100%);
          position: relative;
        }

        .filter-icon.replied:after {
          content: '↵';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 8px;
          font-weight: bold;

      {activeTab === 'projects' && (
        <div>
          <h2>Projects</h2>
          <form onSubmit={handleProjectSubmit}>
            <input type="text" value={projectName} onChange={(event) => setProjectName(event.target.value)} placeholder="Project Name" />
            <textarea value={projectDescription} onChange={(event) => setProjectDescription(event.target.value)} placeholder="Project Description" />
            <input type="file" onChange={handleImageChange} />
            <button type="submit" disabled={loading}>Create Project</button>
          </form>
          <ul>
            {projects.map((project) => (
              <li key={project._id}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <img src={project.image} alt={project.name} />
                <button onClick={() => handleProjectDelete(project._id)}>Delete</button>
                <button onClick={() => handleProjectEdit(project._id, projectName, projectDescription)}>Edit</button>
              </li>
            ))}
          </ul>
        </div>
      )}
        /* Pulse animation for unread count */
        .filter-btn[class*="unread"].active .count-badge {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(255,255,255,0.7); }
          70% { box-shadow: 0 0 0 10px rgba(255,255,255,0); }
          100% { box-shadow: 0 0 0 0 rgba(255,255,255,0); }
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .contacts-header {
            flex-direction: column;
            gap: 1.5rem;
          }
          
          .header-actions {
            width: 100%;
          }
          
          .search-container {
            width: 100%;
          }

          .contacts-filters-container {
            padding: 1rem;
          }
          
          .contacts-filters {
            justify-content: center;
            gap: 0.75rem;
          }
          
          .filter-btn {
            padding: 0.7rem 1.2rem;
            font-size: 0.9rem;
            min-width: 110px;
          }
        }
        
        @media (max-width: 576px) {
          .contacts-filters {
            flex-direction: column;
            gap: 0.5rem;
          }
          
          .filter-btn {
            width: 100%;
            justify-content: space-between;
            min-width: unset;
          }

          .filter-label {
            flex: 1;
            text-align: left;
            margin-left: 0.5rem;
          }
        }

        /* Additional enhancements */
        .filter-btn:focus {
          outline: 2px solid var(--primary-color);
          outline-offset: 2px;
        }

        .filter-btn:active {
          transform: translateY(-1px) scale(0.98);
          transition: all 0.1s;
        }

        /* Loading state for filters */
        .filter-btn.loading {
          opacity: 0.7;
          cursor: not-allowed;
          pointer-events: none;
        }

        .filter-btn.loading .count-badge {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .contacts-filters-container {
            background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
            border-color: #4a5568;
          }

          .filter-btn {
            background: #2d3748;
            border-color: #4a5568;
            color: #e2e8f0;
          }

          .filter-btn:hover {
            background: #4a5568;
          }

          .count-badge {
            background: rgba(255,255,255,0.1);
            border-color: rgba(255,255,255,0.2);
          }
        }
      `}</style>
    </div>
  );
};

export default AdminDashboard;