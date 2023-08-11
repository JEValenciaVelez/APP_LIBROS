const express = require("express");
const bookRoutes = require("./booksRoutes");
const router = express.Router();


router.use("/books", bookRoutes);

module.exports = router;