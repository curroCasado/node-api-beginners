const express = require("express");
const app = express();

// bring in routes
const { getPosts } = require("./routes/post");

app.get("/", getPosts);

const port = 8080;
app.listen(8080, () => {
  console.log(`A Node Js API is listening on port: ${port}`);
});
