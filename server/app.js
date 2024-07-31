const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../')));

app.post('/contact', (req, res) => {
    console.log('Form submission received:', req.body);
    res.send('Thank you for your message!');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const app = express();

// // Middleware to parse URL-encoded bodies (form data)
// app.use(bodyParser.urlencoded({ extended: true }));

// // Serve static files (e.g., HTML, CSS) from the public directory
// app.use(express.static(path.join(__dirname, 'public')));

// // Handle form submission
// app.post('/contact', (req, res) => {
//     console.log('Form submission received:', req.body);
//     res.send('Thank you for your message!');
// });

// // Start the server
// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });
