const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user');
const taskRoutes = require('./routes/task');

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { });


app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ message: err.message });
});

app.get('/',  (req, res) => {
    try {
        res.send("Hello World");
    } catch (e) {
        res.status(500).send();
    }
});

module.exports = app;
