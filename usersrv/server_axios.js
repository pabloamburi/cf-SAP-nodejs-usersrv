var express = require('express');
const axios = require('axios');
var app = express();

app.get('/srv/test', function (req, res) {
    res.status(200).json({ message: "I´m alive" });
});

app.get('/user-api/attributes', async function (req, res) {
    const response = await axios({
        method: "GET",
        url: 'https://services.odata.org/V2/Northwind/Northwind.svc/?$format=json',
        headers: {
            "content-type": "application/json"
        }
    });
    console.log(response.data);
    res.status(200).json(response.data);
});

// Start server
app.listen(process.env.PORT || 3000, () => {
    console.log("SERVIDOR INICIADO EN PUERTO ", process.env.PORT || 3000);
});
