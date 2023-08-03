const Books = require("../../models/Books");

const putBook = async (req, res) => {
    const {title, image, author, genres, date} = req.body
    const query = {};
    try{
        if(!title) throw new Error("Must provided an title");
        if(image.length>1){
            query.image = image ;
        }
        if(author.length>1){
            query.author = author;
        }

        if(genres.length>1){
            query.genres = genres;
        }

        if(date.length>2){
            query.date = date;
        }

        const updatedBook = await Books.findOneAndUpdate({title},query);

        res.status(200).send("Book Updated");


    }catch(error){
        console.error(error.message);
    }
};


module.exports = putBook;