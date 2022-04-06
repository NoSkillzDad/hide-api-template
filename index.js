const PORT = 8000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(cors());

app.listen(PORT, () => console.log(`Backend is running on port ${PORT}`));

app.get('/', (req, res) => {
    res.json('Test it works! Hello from the backend!');
})

app.get('/yourendpointhere', (req, res) => {
    const options = {
        method: 'get',
        url: `https://api.yourapiurlhere?q=appid=${process.env.REACT_APP_MY_SECRET_API}`
    }

    axios.request(options).then((response) => {
        res.json(response.data);
    }).catch((error) => {
        res.sendStatus(404);
    })
})