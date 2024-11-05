// const http = require("http");
const express = require("express");
1;
// const routes = require("./routes");

const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  console.log("in the middle 2");
  res.send(`
        <html>
        <form action="/product" method="POST">
          <input type="text" name="title">
          <button type="submit">Add Product</button>
        </form>
        </html>
    `);
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  console.log("in the middle LAST");
  res.send("<h1>HELLOW APP</h1>");
});
// the request listener is a function that will be called when a request is received
// const server = http.createServer(app);
app.listen(3000);
