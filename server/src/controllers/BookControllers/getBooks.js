const Books = require("../../models/Books");

const getBooks = async (req,res) => {
    
    try{
        const books = await Books.find();
        if(books.length===0) res.status(404).send("No hay libros");
        else res.status(200).json(books);
    }catch(error){
        res.status(400).send(error.messsage);
    }
};


module.exports = getBooks;
