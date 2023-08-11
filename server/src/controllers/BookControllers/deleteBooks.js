const Books = require("../../models/Books");


const deleteBook = async (req, res) => {
    const {title} = req.body;
    //console.log({title})
    try{
        const deleteBook = await Books.findOneAndDelete({
            title
        });
        if (!deleteBook) {
            return res.status(404).json({ message: "El libro no existe" });
          }
        console.log("book eliminado",deleteBook)
        res.status(200).send("book eliminado");
    }catch(error){
        console.error(error.message);
    }
};

module.exports = deleteBook;