# Java Spring Boot (Backend) + React JS (Frontend)
[![Typing SVG](https://readme-typing-svg.herokuapp.com?color=%238B00FF&lines=ESTATES-API-SPRINGBOOT)](https://git.io/typing-svg)

**Description:**
EstateAPI is a web application built using **Java 17, PostgreSQL, Spring Security with JWT authentication, and a frontend developed in React JS**. The application serves as a platform for managing real estate properties and user accounts.

**Features:**

**1) User Authentication and Authorization:** Utilizes Spring Security with JWT authentication to secure endpoints and manage user authentication and authorization.

**2) User Management:** Allows users to sign up, log in, and manage their accounts.

**3) Real Estate Management:** Provides functionalities to create, retrieve, update, and delete real estate properties.

**4) RESTful API:** Implements a RESTful API architecture for communication between the frontend and backend components.
**5) Data Persistence:** Utilizes PostgreSQL database to store user and real estate data securely.
**6) Frontend Interface:** The frontend interface is developed using React JS, providing a user-friendly interface for interacting with the application.

**Technologies Used:**
·Java 17

·Spring Security with JWT

·PostgreSQL

·React JS

**Endpoints:**

**Authentication:**

_POST_ /auth/authenticate: Authenticates users and generates JWT token.

_POST_ /auth/signup: Allows users to sign up and creates a new account.

**User Management:**

_GET_ /api/users/me: Retrieves the current user's information.

_GET_ /api/users: Retrieves a list of all users.

_GET_ /api/users/{username}: Retrieves user information by username.

_DELETE_ /api/users/{username}: Deletes a user account.

**Real Estate Management:**

_GET_ /api/estates: Retrieves a list of all real estate properties.

_GET_ /api/estates?text={searchText}: Retrieves real estate properties containing the specified text.

_POST_ /api/estates: Creates a new real estate property.

_DELETE_ /api/estates/{id}: Deletes a real estate property by ID.

**Public Endpoints:**

_GET_ /public/numberOfUsers: Retrieves the total number of users.

_GET_ /public/numberOfEstates: Retrieves the total number of real estate properties.

**Setup Instructions:**

Clone the repository containing the backend Java project.
Set up a PostgreSQL database and configure the database connection in the application properties.
Build and run the Java application using Maven or your preferred IDE.
Clone the repository containing the React JS frontend.
Install dependencies and start the frontend development server using **npm**.
Access the application via the provided URL and begin using the features.

To install necessary libraries (node_modules) for React JS frontend **npm install** or **npm i react-scripts** and then in terminal of client part **npm run start**

1) To look Admin part: **log: _admin_ pas: _admin_**

2) To look User part: **log: _user_ pas: _user_** or  sign up your own account


**Screenshots of the project:**

<img width="1470" alt="image" src="https://github.com/TimurInamkhojayev/inamkhojayev-daurbekov-java-project/assets/146642629/b53093c1-1d0d-4b82-ac98-1bdffe097c69">
<img width="1470" alt="image" src="https://github.com/TimurInamkhojayev/inamkhojayev-daurbekov-java-project/assets/146642629/06980b8d-3808-47af-b0f3-03a3a4f5639a">
<img width="1470" alt="image" src="https://github.com/TimurInamkhojayev/inamkhojayev-daurbekov-java-project/assets/146642629/28b8f77f-a5de-4983-afc8-ed8c3a73e38a">
<img width="1470" alt="image" src="https://github.com/TimurInamkhojayev/inamkhojayev-daurbekov-java-project/assets/146642629/f01e256a-c4f3-493e-beb7-5d0b44643320">
<img width="1470" alt="image" src="https://github.com/TimurInamkhojayev/inamkhojayev-daurbekov-java-project/assets/146642629/91049b9f-9c35-4f40-afaa-3d39e51bead0">
<img width="1470" alt="image" src="https://github.com/TimurInamkhojayev/inamkhojayev-daurbekov-java-project/assets/146642629/31473200-b636-49fd-8a3c-9957de1afe68">
<img width="1470" alt="image" src="https://github.com/TimurInamkhojayev/inamkhojayev-daurbekov-java-project/assets/146642629/e54b909d-30b8-4f66-a65d-4664ecf88f7d">
<img width="1470" alt="image" src="https://github.com/TimurInamkhojayev/inamkhojayev-daurbekov-java-project/assets/146642629/0828759d-f41f-4c2f-bc5c-5dfb9dd01551">
