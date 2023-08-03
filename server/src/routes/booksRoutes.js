const express = require("express"); 
const postBooks = require("../controllers/BookControllers/postBooks");
const getBooks = require("../controllers/BookControllers/getBooks");
const deleteBook = require("../controllers/BookControllers/deleteBooks");
const putBook = require("../controllers/BookControllers/putBooks");
const getBookByName = require("../controllers/BookControllers/getBookByName");
const bookRoutes = express.Router();


bookRoutes.post("/",postBooks);
bookRoutes.get("/", getBooks);
bookRoutes.get("/book", getBookByName);
bookRoutes.delete("/", deleteBook);
bookRoutes.put("/", putBook);


module.exports = bookRoutes;