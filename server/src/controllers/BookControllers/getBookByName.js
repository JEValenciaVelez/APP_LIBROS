const Books = require("../../models/Books");

const getBookByName = async (req,res) => {
    const {title} = req.body;
    try{
        const book = await Books.findOne({title});
        if(!book) res.status(404).send("Libro no encontrado");
        else res.status(200).json(book); 
    }catch(error){
        res.status(400).send(error.messsage);
    }
};


module.exports = getBookByName;
