const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app");
const mongoose = require("mongoose");
const Book = require("../../src/models/Books");

const agent = session(app);

const book1 = {
  title: "Juan senior developer js",
  image: "https://t1.uc.ltmcdn.com/es/posts/1/2/6/como_escribir_un_libro_de_fantasia_toma_nota_47621_600_square.jpg",
  author: "Juan esteban",
  genres: "programacion",
  date: "2023",
};

const book2 = {
  title: "Juan backend Developer",
  image: "https://t1.uc.ltmcdn.com/es/posts/1/2/6/como_escribir_un_libro_de_fantasia_toma_nota_47621_600_square.jpg",
  author: "Juan esteban",
  genres: "programacion",
  date: "2023",
};

describe("Books routes", () => {
  before(async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/BuscadorLibrosTests", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).catch((err) => {
      console.error("Unable to connect to the database:", err);
    });
  });

  beforeEach(async () => {
    await Book.deleteMany({});
    await Book.create(book1);
  });

  describe("GET /books", () => {
    it("should get status 200 and an array", async () => {
      const response = await agent.get("/books");
      expect(response.statusCode).to.be.equal(200);
      expect(response.body).to.be.an("array");
    });
  });

  describe("POST /books", () => {
    it("should create a book and get status 200 and an object", async () => {
      const response = await agent.post("/books").send(book2);
      expect(response.statusCode).to.be.equal(200);
      expect(response.body).to.be.an.instanceof(Object);
      expect(response.body).to.have.property("title", "Juan backend Developer");
    });
  
    it("should return an error when an empty object is sent", async () => {
        const response = await agent.post("/books").send({});
        expect(response.statusCode).to.be.equal(400);
        expect(response.body).to.be.an("array");
        const errorMessages = response.body.map((error) => error.msg);
        expect(errorMessages).to.include("Invalid value", "Title cannot be empty", "Author field cannot be empty", "Genres field cannot be empty", "Date cannot be empty", "If you provided a picture of the Book, it must be a valid Image.");
      });
      
  });
  
 describe("PUT /books", () => {
  it("should update a book and get status 200 and the updated object", async () => {
    // Create a book to be updated
    const newBook = await Book.create(book1);

    // Define the updated data
    const updatedData = {
      title: "Updated Book Title",
      author: "Updated Author",
    };

    const response = await agent
      .put("/books")
      .send({ title: newBook.title, author: updatedData.author }); // Use title to identify the book

    expect(response.statusCode).to.be.equal(200);
    expect(response.body).to.be.an.instanceof(Object);
    expect(response.body).to.have.property("author", updatedData.author);
  });
});


describe("DELETE /books", () => {
  it("should delete a book and get status 200", async () => {
    // Create a book to be deleted
    const newBook = await Book.create(book1);

    const deleteData = {
      title: newBook.title, // Use _id to identify the book
    };

    const response = await agent
      .delete("/books")
      .send(deleteData);

    expect(response.statusCode).to.be.equal(200);
    expect(response.body).to.deep.equal({ message: "book eliminado" });

    // Check if the book is actually deleted from the database
    const deletedBook = await Book.findOne(newBook.title);
    expect(deletedBook).to.be.null;
  });
});


});
