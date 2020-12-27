const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const app = express();


const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({
        message: "It Works !"
    });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});