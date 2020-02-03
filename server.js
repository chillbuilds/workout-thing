const express = require('express');
const mongoose = require("mongoose");
const Example = require("./exampleModel.js");
const port = process.env.port || 3000;
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", 
{ useNewUrlParser: true, useFindAndModify: false });

app.use(require('./routes/APIroutes'));

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})