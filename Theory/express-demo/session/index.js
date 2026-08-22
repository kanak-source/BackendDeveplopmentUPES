const express = require('express');
const session = require('express-session');

const app = express();

// Session middleware
app.use(
  session({
    secret: 'mySecretKey',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60000 // 1 minute
    }
  })
);

// Login - Set session variable
app.get('/login', (req, res) => {
  req.session.username = 'JohnDoe';
  res.send('Session started for ' + req.session.username);
});

// Profile - Access session data
app.get('/profile', (req, res) => {
  if (req.session.username) {
    res.send('Welcome ' + req.session.username);
  } else {
    res.send('Please log in first.');
  }
});

// Logout - Destroy session
app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send('Error destroying session');
    }

    res.send('Session destroyed successfully');
  });
});

// Start server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});