const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  const existingUser = await User.findOne({ username });
  if (existingUser) return res.send('Username already taken');

  const hashed = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashed });
  await user.save();

  res.send('User registered successfully');
});

// Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) return res.send('User not found');

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.send('Wrong password');

  req.session.userId = user._id;
  res.send('Login successful');
});

module.exports = router;

// Logout
router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.send('Logged out');
  });
});
