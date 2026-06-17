const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const authRoutes = require('./routes/User.route.js');
const recipeRoutes = require('./routes/Recipe.route.js');



const Serveropen = () => {

    
    app.use(express.json());
    app.use(cors());
    app.use(cookieParser());
    app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: { secure: process.env.NODE_ENV, httpOnly: true }
    }));

    app.use('/auth', authRoutes);
    app.use('/recipes', recipeRoutes);

    app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
}

module.exports = Serveropen;