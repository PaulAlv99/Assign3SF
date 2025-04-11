const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: ["http://192.168.1.14:3000", "http://127.0.0.1:3000"],
};

app.use(cors(corsOptions));



// Serve static files (your HTML pages)
app.use(express.static('views'));

// Parse incoming JSON
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:FjlkmASaRrFSmgYs@cluster0.nka2m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

// Routes
app.use('/api/auth', authRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
