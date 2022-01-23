const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

// //Middlewares
// app.use('/posts', () => {
//     console.log('This is the middleware running.')
// });

app.use(bodyParser.json());


//Importing Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);  //This is a middleware


//ROUTES
app.get('/', (req, res) => {
    res.send('This is the home page.');
});




//Connecting to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
    console.log('Connected to the Database.')
);


//To start listening to the server
app.listen(3000);