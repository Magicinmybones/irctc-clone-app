const express = require('express');  // Import the Express framework.
const app = express();  // Create an instance of the Express application.

app.use(express.json());  // Middleware to parse JSON bodies of incoming requests.