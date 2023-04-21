// require packages
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { SERVER_PORT } = process.env;


const { getLearn, addLearn} = require("./controller");

app.use(express.json());
// app.use(express.static(`${__dirname}/client`));
app.use(cors())



app.get('/learn', getLearn)
app.post('/learn',addLearn)

app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}`));
