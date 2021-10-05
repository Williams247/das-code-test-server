const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Sets cors
app.use((request, response, next) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Methods", "GET");
    response.setHeader(
        "Access-Control-Allow-Headers",
        "Authorization, Content-Type"
    );
    next();
});

app.use(require('./api'));

app.use((request, response) => {
    response.status(404).json({ message: 'EndPoint not found, Call the "/getsecret" endpoint and start.' });
});

const port = process.env.PORT || 8000;

app.listen(port, () => console.log('App started'));
