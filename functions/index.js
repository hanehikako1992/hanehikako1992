'use strict';
const app = require('./server')
const dbo = require("./db/conn");

app.listen(3000, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);

  });
  console.log(`Server is running on port: ${port}`);
});
