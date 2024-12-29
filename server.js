const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Sample student list
const students = [
  { from: 'Alice', trainNo: '101' },
  { from: 'Bob', trainNo: '102' },
  { from: 'Charlie', trainNo: '103' },
  { from: 'David', trainNo: '104' },
  { from: 'Eve', trainNo: '105' }
];

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // For handling JSON requests
app.use(express.static('public'));

// Route to serve page1.html
app.get('/page1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to serve page2.html
app.get('/page2', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'select_train.html'));
});

// Route to handle AJAX request from page1
app.post('/gettrainNo', (req, res) => {
  const from = req.body.from;
  const student = students.find(s => s.from.toLowerCase() === from.toLowerCase());

  if (student) {
    res.json({ trainNo: student.trainNo });
  } else {
    res.status(404).json({ error: 'Student not found!' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
