# XSUAA tutorial | SAP Cloud Platform, Cloud Foundry 

Code sample using an application router with cfenv to parse the VCAP environment variables and xssec, body-parser, and passport for authorization. No database call. 

Business Logic App:
- main: server.js
- dependencies: @sap/xsenv, @sap/xssec, body-parser, passport, express
- start command: package.json

App Router:
- routes: xs-app.json
- dependencies: @sap/approuter
- start command: package.json

Security:
- XSUAA security descriptor: xs-security.json

MTA deployment: 
- application manifest: mta.yaml
- command: 
    mbt build
    cf deploy mta_archives/myappuaa_0.0.1.mtar 