const express = require("express");
const bodyParser = require("body-parser");
const controller = require('../scr/Controllers/authControllers');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


require('../scr/Controllers/authControllers')(app);

app.listen(3000);