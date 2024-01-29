
// Define variables for search button, search input, and UI instance
let searchBtn = document.querySelector('#searchBtn');
let searchUser = document.querySelector('#searchUser');
let ui = new UI();

// Event listener for the search button
searchBtn.addEventListener('click', (e) => {
    // Retrieve the text entered by the user
    let userText = searchUser.value;
    // Check if the input is not empty
    if (userText != '') {
        // Fetch user data from GitHub API
        fetch(`https://api.github.com/users/${userText}`)
            .then(result => result.json())
            .then(data => {
                // If user not found, display an alert
                if (data.message == 'Not Found') {
                    ui.showAlert("User not Found!", "alert alert-danger");
                } else {
                    // If user found, display the user profile
                    ui.showProfile(data);
                }
            })
    } else {
        // If input is empty, clear any existing profile
        ui.clearProfile();
    }
});