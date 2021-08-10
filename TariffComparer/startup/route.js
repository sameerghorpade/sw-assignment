const express = require("express");
module.exports = function (app) {
    app.use(express.json());
    
    require("../routes/products")(app);
    /*add more routes below*/

    
    app.get("/", (req, res) => {
      res.json({ 
      note: "Thank you for giving me the opportunity, enjoyed working on it. Just wanted to highlight the implementation details as below",
      Design : "I have attempted to design in a way to integrate future products with ease. It will be easy to integrate the api.",
      Validation:  "Input is validated to accept only non-negative integers",
      Tests : "Have written unit and integration test during service and model implementation. Also added an sample output of loadtest - tested on my machine",
      Const : "Files in const folder can be thought as data coming from database since those are products agreed constants for calculation",
      REST_SERVICE_GET_PRODUCTS: "http://localhost:5000/api/products/3500" });
    });
};
