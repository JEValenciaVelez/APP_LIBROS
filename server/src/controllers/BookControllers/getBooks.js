const Books = require("../../models/Books");

const getBooks = async (req,res) => {
    try{
        const books = await Books.find();
        res.status(200).json(books);
    }catch(error){
        console.error(error.message);
    }
};


module.exports = getBooks;
