
const Books = require("../../models/Books");


const postBooks = async (req, res) => {
    
    try{
        const newBook = new Books(req.body);
        await newBook.save();
        res.status(200).json(newBook);
    }catch(error){
        console.error(error.message);
    }
};

module.exports = postBooks;