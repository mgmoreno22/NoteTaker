const fs = require("fs");
const express = require("express");
const path = require("path");

var app = express();

const PORT = process.env.PORT || 4050;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

//routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App is listening on PORT " + PORT);
})