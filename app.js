const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false })); // parse incoming requests

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(express.static(path.join(__dirname, "public"))); // serve static files
app.use((req, res, next) => { 
  res.status(404).sendFile(path.join(__dirname, "views", "not-found.html"));
});

// the request listener is a function that will be called when a request is received
// const server = http.createServer(app);
app.listen(3000);
