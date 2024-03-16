const express = require('express');
const { User, Post, Comment } = require('./models/myLiteModel.js')

const app = express();

//API endpoints for Users, Posts, and Comments
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});