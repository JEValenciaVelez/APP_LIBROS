const express = require("express"); 
const postBooks = require("../controllers/BookControllers/postBooks");
const getBooks = require("../controllers/BookControllers/getBooks");
const deleteBook = require("../controllers/BookControllers/deleteBooks");
const putBook = require("../controllers/BookControllers/putBooks");
const getBookByName = require("../controllers/BookControllers/getBookByName");
const { validatePostBook, validatePutBook } = require("../Libraries/validator/BookValidator");
const validationMessages = require("../Libraries/validator/ValidationMessage");
const bookRoutes = express.Router();


bookRoutes.post("/",validatePostBook, validationMessages ,postBooks);
bookRoutes.get("/", getBooks);
bookRoutes.get("/book", getBookByName);
bookRoutes.delete("/", deleteBook);
bookRoutes.put("/" , validatePutBook, validationMessages ,putBook);


module.exports = bookRoutes;