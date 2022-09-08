const express = require('express');
const mongoose = require('mongoose');
const app = express();
const config = require('./config/default');
const route = require("./route/route");


mongoose.connect("mongodb://localhost:27017/authorbook");



route(app);