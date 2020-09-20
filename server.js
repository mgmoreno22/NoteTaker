// Dependencies
const express = require("express");

var app = express();

// Port will function with local or Heroku hosted server
const PORT = process.env.PORT || 4050;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

// routes for html and api
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Begins the program
app.listen(PORT, function() {
    console.log("App is listening on PORT " + PORT);
})