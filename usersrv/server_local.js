// As documented
// https://www.npmjs.com/package/@sap/xssec
// https://www.npmjs.com/package/@sap/xsenv
var express = require('express');
var app = express();

app.get('/srv/test', function (req, res) {
  res.status(200).json( { message: "I´m alive" } );
});

app.get('/user-api/attributes', function (req, res) {
  res.status(200).json( { name: "Nombre de Prueba",
                          lastName: "Apellido de prueba",
                          email: "mail@prueba.com",
                          vendor_accounts: "NN-NNNNNNNN-N" } );
});

// Start server
app.listen(process.env.PORT || 3000, ()=>{
  console.log("SERVIDOR INICIADO EN PUERTO ", process.env.PORT || 3000 );
});
