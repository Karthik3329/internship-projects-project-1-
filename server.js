const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();

// Body parser middleware to handle form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML, CSS, and JS files
app.use(express.static('public'));

// Handle form submission
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    const data = `Username: ${username}, Email: ${email}, Password: ${password}\n`;

    // Save data to a file
    fs.appendFile(path.join(__dirname, 'data', 'registrations.txt'), data, (err) => {
        if (err) {
            console.error('Error writing to file', err);
            res.status(500).send('Server error');
        } else {
            // Redirect to the congratulations page with the username as a query parameter
            res.redirect(`/congratulations.html?username=${encodeURIComponent(username)}`);
        }
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
