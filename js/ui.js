class UI {
  constructor() {
      // Initialize the UI class with a reference to the profile element
      this.profile = document.querySelector('#profile');
  }

  // Method to display user profile information
  showProfile(user) {
      // Clear any existing alerts
      this.clearAlert();
      // Populate the profile element with user information
      this.profile.innerHTML = `
      <!-- HTML template for displaying user profile -->
      `;
  }

  // Method to clear user profile
  clearProfile() {
      // Clear the profile element content
      this.profile.innerHTML = "";
  }

  // Method to display alert message
  showAlert(message, className) {
      // Clear any existing alerts and profile
      this.clearAlert();
      this.clearProfile();
      // Create a new alert element with provided message and class
      let div = document.createElement('div');
      div.className = className;
      div.appendChild(document.createTextNode(message));
      // Insert the alert into the DOM before the search input
      let container = document.querySelector('.searchContainer');
      let search = document.querySelector('.search');
      container.insertBefore(div, search);
  }

  // Method to clear alert message
  clearAlert() {
      // Remove any existing alert from the DOM
      let currentAlert = document.querySelector('.alert');
      if(currentAlert) {
          currentAlert.remove();
      }
  }
}
