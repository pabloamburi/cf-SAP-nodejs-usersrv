// As documented
// https://www.npmjs.com/package/@sap/xssec
// https://www.npmjs.com/package/@sap/xsenv
var JWTStrategy = require('@sap/xssec').JWTStrategy;
var xsenv = require('@sap/xsenv');
var express = require('express');
var passport = require('passport');
var app = express();
passport.use(new JWTStrategy(xsenv.getServices({xsuaa:{tag:'xsuaa'}}).xsuaa)); 
app.use(passport.initialize());
app.use(passport.authenticate('JWT', { session: false }));

app.get('/srv/test', function (req, res) {
  res.status(200).json( { campo1: "hola", 
                          campo2: "mundo" } );
});

app.get('/srv/authinfo', function (req, res) {
    res.status(200).json(req.authInfo.userAttributes);
});

app.get('/srv/user', function (req, res) {
    var isAuthorized = req.authInfo.checkScope('$XSAPPNAME.User');
    if (isAuthorized) {
        res.status(200).json(req.authInfo.scopes);
    } else {
      res.status(403).send('Forbidden');
    }
  });
  
  app.get('/srv/admin', function (req, res) {
    const isAuthorized = req.authInfo.checkScope('$XSAPPNAME.Admin');
    if (!isAuthorized) {
      res.status(403).json('Forbidden');
      return;
    }
    res.status(200).json(req.authInfo.scopes);
  });

// Start server
app.listen(process.env.PORT || 3000, ()=>{});
