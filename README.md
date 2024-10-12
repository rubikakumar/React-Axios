# User Profiles Application

## Project Overview

This project is a user profiles application built with React and React Router. It allows users to view, add, edit, and delete user profiles. The data is fetched from two external APIs: [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) and [MockAPI](https://65d5835b3f1ab8c63437249d.mockapi.io/api/UserData).

## Features

- **User Profiles**: View a list of user profiles fetched from external APIs.
- **Add User**: Form to add a new user profile.
- **Edit User**: Edit existing user profiles.
- **Delete User**: Option to delete a user profile.
- **User Details**: View detailed information for each user profile.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Router**: For routing between components.
- **Axios**: For making HTTP requests.
- **Bootstrap**: For styling and responsive design.

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rubikakumar/React-Axios.git
   cd React-Axios
   
2. Install dependencies:
   npm install

3. Start the application:
   npm start

4. Open your browser and go to http://localhost:5174.

## Component Overview

**Home.jsx**
This component fetches user data from two APIs and displays the user profiles in a card format. Users can navigate to view, edit, or delete a profile.

**Navbar.jsx**
This component renders the navigation bar, allowing users to navigate between the Home page and the Add User form.

**SingleUserProfile.jsx**
Displays the details of a single user profile. If a user profile is updated, it reflects the new data.

**UserProfile.jsx**
Fetches and displays detailed information for a specific user. It checks local storage before fetching data from the API.

**AddUserForm.jsx**
Form component to add a new user profile. It captures user input and submits the data to the API.

**EditUser.jsx**
Allows users to edit an existing user profile. It retrieves user data and provides a form to update the information.

**EditUserForm.jsx**
This component contains the form for editing user details and submitting changes.

**Footer.jsx**
Displays footer information for the application, such as copyright details.

## Running the Application

To run the application, follow the setup instructions above. The application will automatically open in your default web browser at http://localhost:5174.

## Development Process

The development process involved creating individual components for each functionality and connecting them using React Router for seamless navigation. The APIs were integrated using Axios for data fetching.
