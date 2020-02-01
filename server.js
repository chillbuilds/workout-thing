const express = require('express');
const mongoose = require("mongoose");
const Example = require("./exampleModel.js");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbExample", { useNewUrlParser: true });

