const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const auth_controller = require('./controllers/controller');
require('dotenv').config();

const app = express();

const {SERVER_PORT, CONNECTION_STRING} = process.env;

app.use(bodyParser.json());

massive(CONNECTION_STRING).then(db => {
    app.set("db", db);
    console.log("db is connected");
})

app.post("/api/register", auth_controller.register);

app.post("/api/login", auth_controller.login);






app.listen(SERVER_PORT, () => {
    console.log(`Server is listening on port: ${SERVER_PORT}`);
})