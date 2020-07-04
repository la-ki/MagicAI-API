const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/user');

const app = express();


// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());



// Routes
app.use(userRoutes);

// Localhost PORT
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port} `);
})