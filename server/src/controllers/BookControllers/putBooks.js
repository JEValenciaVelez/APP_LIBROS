const Books = require("../../models/Books");

const putBook = async (req, res) => {
    const {title, image, author, genres, date} = req.body
    const query = {};
    try{
        if(!title) throw new Error("Must provided an title");
        if(image){
            query.image = image ;
        }
        if(author){
            query.author = author;
        }

        if(genres){
            query.genres = genres;
        }

        if(date){
            query.date = date;
        }

        const updatedBook = await Books.findOneAndUpdate({title},query);

        res.status(200).send("Book Updated");


    }catch(error){
        console.error(error.message);
    }
};


module.exports = putBook;