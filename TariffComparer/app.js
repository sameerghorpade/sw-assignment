const express = require('express');
const app = express();

require('./startup/route')(app);
 
const port = process.env.PORT || 5000;
const server  = app.listen(port, () => console.log(`listening on ${port}..`));

module.exports = server;

