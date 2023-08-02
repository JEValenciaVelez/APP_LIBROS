const Books = require("../../models/Books");


const deleteBook = async (req, res) => {
    const {title} = req.body
    try{
        const deleteBook = await Books.findOneAndDelete({
            title
        });
        res.status(200).json(deleteBook);
    }catch(error){
        console.error(error.message);
    }
};

module.exports = deleteBook;