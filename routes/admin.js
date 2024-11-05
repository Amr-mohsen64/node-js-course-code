const router = require("express").Router();
const path = require("path");
const rootDir = require("../util/path");

// amin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// /admin/product => POST
router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});
module.exports = router;
