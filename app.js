const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const app = express();


const port = process.env.PORT || 3000

let whiteList = [
    'http://localhost:8888/',
];

let corsOption = {
    origin: function(origin, callback) {
        if (whiteList.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Your Request not Allowed by System'));
        }
    }
}

app.use(cors(corsOption));

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