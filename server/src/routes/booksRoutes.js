const express = require("express"); 
const postBooks = require("../controllers/BookControllers/postBooks");
const getBooks = require("../controllers/BookControllers/getBooks");
const deleteBook = require("../controllers/BookControllers/deleteBooks");
const putBook = require("../controllers/BookControllers/putBooks");
const bookRoutes = express.Router();


bookRoutes.post("/",postBooks);
bookRoutes.get("/", getBooks);
bookRoutes.delete("/", deleteBook);
bookRoutes.put("/", putBook);


module.exports = bookRoutes;