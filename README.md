# weatherapp-Backend


# Setup Instructions

# 1.Clone the Repository:
  git clone repository-url

# 2. Install Dependencies
   cd backend
   npm install

# 3.Set Up Environment Variables:

Create a .env file in the backend directory.
Add the following variables:
makefile
Copy code
PORT=8090# Or any desired port number
MONGODB_URI=<your-mongodb-uri>

# 4.Start the Backend Server:
cd backend

npm start



Node.js and Express.js were chosen for the backend due to their lightweight and fast nature, making them ideal for building scalable and high-performance server-side applications.
Express.js provides a minimalist framework for building robust APIs, handling HTTP requests, and defining routes.

# Database: MongoDB

MongoDB was chosen as the database for its flexibility, scalability, and ease of use with Node.js.
Mongoose, an Object Data Modeling (ODM) library for MongoDB and Node.js, is used for schema validation and interaction with the MongoDB database.
Deployment Process

# 5.Backend Deployment

The backend is deployed using Render, a modern cloud provider built for developers. The deployment process involves:

# Configuration:

Set up a Render account and create a new web service.
Configure environment variables such as MONGODB_URI in the Render dashboard.
Deployment:

Connect the Render service to your GitHub repository.
Trigger automatic deployments whenever changes are pushed to the main branch.
Continuous Integration/Continuous Deployment (CI/CD):

Utilize Render's built-in CI/CD pipeline to automate the deployment process.
Ensure that the application is automatically deployed and updated whenever changes are made to the repository.
Monitoring and Maintenance:

Monitor the application's performance and health using Render's dashboard and logging features.
Perform regular maintenance and updates to ensure the security and stability of the deployed application.
