const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

mongoose.connect('mongodb://127.0.0.1:27017/crm',  { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(cookieParser());
app.use(cors());

const ClientsApiRouter = require('./routes/ClientsApiRoutes');
const ActionsApiRouter = require('./routes/ActionsApiRoutes');
const UserApiRouter = require('./routes/UserApiRoutes');

app.use('/client/', ClientsApiRouter);
app.use('/action/', ActionsApiRouter);
app.use('/user/', UserApiRouter);

app.listen(8001, () => {
    console.log('Server CRM started');
})