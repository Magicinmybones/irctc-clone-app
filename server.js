const express = require('express');  // Import the Express framework.
const app = express();  // Create an instance of the Express application.

app.use(express.json());  // Middleware to parse JSON bodies of incoming requests.
const data = [  // Data array that simulates a small database of name-response pairs.
    { from: 'Patna', train: 'Rajdhani' },  // Name "Mohit" maps to "Hello Mohit!".
    { from: 'Delhi', train: 'Tejas' },    // Name "Alice" maps to "Hi Alice!".
    { from: 'Agra', train: 'Garib Rath' }   // Name "John" maps to "Welcome John!".
  ];
  app.post('/search', (req, res) => {  // Route that handles POST requests to '/search'.
    const { name } = req.body;  // Destructure the 'name' from the request body.
  
    const result = data.find(entry => entry.name.toLowerCase() === name.toLowerCase());  // Find the entry in the 'data' array where the 'name' matches the input.
  
    if (result) {  // If a match is found:
      res.json({ message: result.response });  // Send back the corresponding 'response' in the message.
    } else {  // If no match is found:
      res.json({ message: 'Name not found!' });  // Send a default message indicating no match.
    }
  });