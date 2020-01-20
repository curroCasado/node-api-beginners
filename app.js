const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world from node js");
});

const port = 8080;
app.listen(8080, () => {
  console.log(`A Node Js API is listening on port: ${port}`);
});
