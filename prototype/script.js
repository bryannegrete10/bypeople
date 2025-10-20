// State management
let selectedRole = null;
let uploadedFiles = [];

// Role selection functions
function selectRole(role) {
  selectedRole = role;
  // Scroll to signup section
  document.getElementById('signup-section').scrollIntoView({ behavior: 'smooth' });
  // Trigger role selection after scroll
  setTimeout(() => {
    selectRoleInForm(role);
  }, 500);
}

function selectRoleInForm(role) {
  selectedRole = role;
  const creatorBtn = document.getElementById('role-creator');
  const brandBtn = document.getElementById('role-brand');
  const signupForm = document.getElementById('signup-form');
  const portfolioSection = document.getElementById('portfolio-section');

  // Update button states
  creatorBtn.classList.remove('active-creator');
  brandBtn.classList.remove('active-brand');

  if (role === 'creator') {
    creatorBtn.classList.add('active-creator');
    portfolioSection.classList.remove('hidden');
  } else {
    brandBtn.classList.add('active-brand');
    portfolioSection.classList.add('hidden');
  }

  // Show form
  signupForm.classList.remove('hidden');
}

// File upload handler with mock simulation
function handleFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const uploadStatus = document.getElementById('upload-status');
  const previewGrid = document.getElementById('preview-grid');

  // Show uploading status
  uploadStatus.classList.remove('hidden', 'success');
  uploadStatus.classList.add('uploading');
  uploadStatus.textContent = 'Subiendo archivo...';

  // Simulate upload process
  setTimeout(() => {
    // Create file preview
    const reader = new FileReader();
    
    reader.onload = function(e) {
      const fileData = {
        name: file.name,
        type: file.type,
        url: e.target.result,
        timestamp: new Date().toISOString()
      };

      uploadedFiles.push(fileData);

      // Show success status
      uploadStatus.classList.remove('uploading');
      uploadStatus.classList.add('success');
      uploadStatus.textContent = '✓ Archivo subido con éxito';

      // Add preview to grid
      addPreviewToGrid(fileData);

      // Hide success message after 2 seconds
      setTimeout(() => {
        uploadStatus.classList.add('hidden');
      }, 2000);

      // Reset file input
      event.target.value = '';
    };

    reader.readAsDataURL(file);
  }, 1500); // Simulate 1.5 second upload
}

// Add preview to grid
function addPreviewToGrid(fileData) {
  const previewGrid = document.getElementById('preview-grid');
  const previewItem = document.createElement('div');
  previewItem.className = 'preview-item';

  const isVideo = fileData.type.startsWith('video/');
  const mediaElement = isVideo 
    ? `<video src="${fileData.url}" controls class="preview-media"></video>`
    : `<img src="${fileData.url}" alt="uploaded" class="preview-media">`;

  previewItem.innerHTML = `
    ${mediaElement}
    <a href="${fileData.url}" target="_blank" class="preview-link" title="${fileData.name}">
      ${fileData.name}
    </a>
  `;

  previewGrid.appendChild(previewItem);
}

// Form submission handler
function handleSignup(event) {
  event.preventDefault();

  const name = document.getElementById('name-input').value;
  const bio = document.getElementById('bio-input').value;

  // Create user data object
  const userData = {
    name: name,
    role: selectedRole,
    bio: bio,
    uploadedFiles: uploadedFiles,
    timestamp: new Date().toISOString()
  };

  // Save to localStorage
  localStorage.setItem('bypeople_user', JSON.stringify(userData));

  // Show success message
  displaySuccessMessage(userData);
}

// Display success message
function displaySuccessMessage(userData) {
  const signupForm = document.getElementById('signup-form');
  const roleSelection = document.querySelector('.role-selection');
  const successMessage = document.getElementById('success-message');
  const successDetails = document.getElementById('success-details');

  // Hide form and role selection
  signupForm.classList.add('hidden');
  roleSelection.classList.add('hidden');

  // Build success details HTML
  let detailsHTML = `
    <p><strong>Nombre:</strong> ${userData.name}</p>
    <p><strong>Rol:</strong> ${userData.role === 'creator' ? 'Creador' : 'Marca / Agencia'}</p>
    <p><strong>Bio:</strong> ${userData.bio}</p>
  `;

  if (userData.uploadedFiles.length > 0) {
    detailsHTML += `<p><strong>Archivos subidos:</strong> ${userData.uploadedFiles.length}</p>`;
  }

  successDetails.innerHTML = detailsHTML;

  // Show success message
  successMessage.classList.remove('hidden');

  // Scroll to success message
  successMessage.scrollIntoView({ behavior: 'smooth' });
}

// Reset form to create another profile
function resetForm() {
  const signupForm = document.getElementById('signup-form');
  const roleSelection = document.querySelector('.role-selection');
  const successMessage = document.getElementById('success-message');
  const previewGrid = document.getElementById('preview-grid');
  const portfolioSection = document.getElementById('portfolio-section');

  // Reset state
  selectedRole = null;
  uploadedFiles = [];

  // Clear form inputs
  document.getElementById('name-input').value = '';
  document.getElementById('bio-input').value = '';
  document.getElementById('file-input').value = '';

  // Clear preview grid
  previewGrid.innerHTML = '';

  // Reset role buttons
  document.getElementById('role-creator').classList.remove('active-creator');
  document.getElementById('role-brand').classList.remove('active-brand');

  // Hide sections
  signupForm.classList.add('hidden');
  successMessage.classList.add('hidden');
  portfolioSection.classList.add('hidden');

  // Show role selection
  roleSelection.classList.remove('hidden');

  // Scroll to signup section
  document.getElementById('signup-section').scrollIntoView({ behavior: 'smooth' });
}

// Load saved data on page load (if any)
window.addEventListener('DOMContentLoaded', () => {
  const savedUser = localStorage.getItem('bypeople_user');
  if (savedUser) {
    const userData = JSON.parse(savedUser);
    console.log('Usuario guardado encontrado:', userData);
  }
});
