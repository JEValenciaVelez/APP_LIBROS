const mongoose = require("mongoose");
const { expect } = require("chai");

const Book = require("../../src/models/Books"); // Asegúrate de importar el modelo correcto

const book1 = {
  title: "Juan senior developer js",
  image: "https://t1.uc.ltmcdn.com/es/posts/1/2/6/como_escribir_un_libro_de_fantasia_toma_nota_47621_600_square.jpg",
  author: "Juan esteban",
  genres: "programacion",
  date: "2023",
};

describe("Book model", () => {
  before(async () => {
    // Conectar a la base de datos de MongoDB usando Mongoose para una base de datos de prueba
    await mongoose.connect("mongodb://127.0.0.1:27017/BuscadorLibrosTests", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  beforeEach(async () => {
    // Borrar y rellenar la base de datos antes de cada prueba
    await Book.deleteMany({});
  });

  after(async () => {
    // Desconectar de la base de datos después de las pruebas
    await mongoose.disconnect();
  });

  describe("Validators", () => {
    it("should throw an error if title is null", async () => {
      try {
        await Book.create({}); // Asegúrate de incluir todas las propiedades requeridas, incluyendo "author"
        throw new Error("Property title should not be null");
      } catch (error) {
        expect(error.message).to.exist;
      }
    });

    it("should work when it's a valid title", async () => {
      await Book.create({ title: "Juan senior developer js", author: "Juan Esteban" });
    });
  });

  describe("Books should exist", () => {
    it("Book model should exist", () => {
      const BookModel = mongoose.models.Books; // Cambia "Book" por "Books"
      expect(BookModel).to.exist;
    });

    it("Book should have the right properties", async () => {
      const book = await Book.create(book1);
      const keys = [
        "title",
        "image",
        "author",
        "genres",
        "date",
      ];
      expect(book.toJSON()).to.include.keys(keys);
    });
  });

  describe("Properties can not be null", () => {
    it("Property title can not be null", async () => {
      try {
        await Book.create({
          image: "https://t1.uc.ltmcdn.com/es/posts/1/2/6/como_escribir_un_libro_de_fantasia_toma_nota_47621_600_square.jpg",
          author: "Juan esteban",
          genres: "programacion",
          date: "2023",
        });
        throw new Error("Property title should not be null");
      } catch (error) {
        expect(error.message).to.exist;
      }
    });

    it("Property image can not be null", async () => {
      try {
        await Book.create({
          title: "Juan senior developer js",
          author: "Juan esteban",
          genres: "programacion",
          date: "2023",
        });
        throw new Error("Property image should not be null");
      } catch (error) {
        expect(error.message).to.exist;
      }
    });

    it("Property author can not be null", async () => {
      try {
        await Book.create({
          title: "Juan senior developer js",
          image: "https://t1.uc.ltmcdn.com/es/posts/1/2/6/como_escribir_un_libro_de_fantasia_toma_nota_47621_600_square.jpg",
          genres: "programacion",
          date: "2023",
        });
        throw new Error("Property author should not be null");
      } catch (error) {
        expect(error.message).to.exist;
      }
    });
  });

  // Más pruebas...

});
