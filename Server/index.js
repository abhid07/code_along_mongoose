const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const {mongoose} = require('../config/db')
var user = require('../controller/userController')

var app = express();
app.use(bodyParser.json());
app.use(cors({origin:'*'}));

app.listen(3000,()=>{console.log("Server started at 3000 port")});
app.use('/user',user)

