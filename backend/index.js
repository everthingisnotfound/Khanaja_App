const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Import JWT package

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://saxenaarjun1239:ArjunSaxena1239@cluster0.ourho3r.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// Define a user schema and model
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Middleware to parse JSON requests
app.use(express.json());

// JWT Secret Key (Replace with your own secret key)
const jwtSecret = 'your_secret_key';

// Register route
app.post('/api/login', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ error: 'All fields are required.' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    // Generate a JWT token upon successful registration
    const token = jwt.sign({ username: newUser.username, email: newUser.email }, jwtSecret);
    res.status(201).json({ message: 'User registered successfully.', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

// JWT authentication middleware
app.use('/api/protected', (req, res, next) => {
  const token = req.header('x-auth-token'); // Assuming you're sending the token in a header
  if (!token) {
    return res.status(401).json({ error: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token is not valid' });
  }
});

// Example protected route
app.get('/api/protected/data', (req, res) => {
  res.json({ message: 'This is a protected route' });
});

const dishes = require("./routes/dishRoutes"); // Replace with the actual path to your dishes routes
const userRoutes = require("./routes/userRoutes"); // Replace with the actual path to your user routes

app.use("/api", dishes);
app.use("/api/user", userRoutes);
// Add your routes here, which will now require JWT authentication

// The predefined code is retained
app.use(cors());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
