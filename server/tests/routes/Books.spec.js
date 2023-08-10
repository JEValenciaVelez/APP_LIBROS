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
      expect(response.error.text).to.be.equal('{"error":"Missing data for book"}');
    });
  });
});
