//Basic required imports for nodeJS
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const useragent = require('express-useragent');

//Create an instance of express for our app and instaniate bodyParser and cors
const app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());
//Api url
const api = '/api/pc-stat';

app.get(api, (req, res, next) => {
    const lang = req.acceptsLanguages();
    const ip = req.ip;
    const software = `os: ${req.useragent.os}; Browser: ${req.useragent.browser}`;
    
    res.json({'ipadress': ip, 'language': lang, 'software': software})
});


//listen localhost on port 3000
app.listen(3000, () => {
    console.log("Working");
});
