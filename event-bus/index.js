const express = require('express');
const bodayParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodayParser.json());

app.post('/events', (req, res) => {
    const event = req.body;

    axios.post('http://localhost:4000/events', event).catch((error) => {
        console.log(error);
    });
    axios.post('http://localhost:4001/events', event).catch((error) => {
        console.log(error);
    });
    axios.post('http://localhost:4002/events', event).catch((error) => {
        console.log(error);
    });

    res.send({ status: 'OK'} );
})

app.listen(4005, () => {
    console.log('Listening on 4005');
})