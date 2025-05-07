const { books } = require("../database/connection");

exports.fetchBooks = async function (req, res) {
  //logic to fetch books from database
  const datas = await books.findAll(); //select * from books , books.find(), always return an araay

  res.json({
    message: "Books fetched successfully",
    //  datas: datas,
    datas, //keys ra value ko naam same vya yesore nee lekhna paaenxa
  });
};

exports.addBooks = async function (req, res) {
  //logic to add books to database goes here
  //console.log(req.body);
  // const bookName = req.body.bookName
  // const bookPrice = req.body.bookPrice

  const { bookName, bookPrice, bookAuthor, bookGenre } = req.body; //mathi ko duita lai yesore destructure garerw nee nikalna milxa
  await books.create({
    bookName: bookName, // format = column : value
    bookPrice: bookPrice,
    bookAuthor: bookAuthor,
    bookGenre: bookGenre,
  });

  res.json({
    message: "Book added successfully",
  });
};

exports.deleteBooks = function (req, res) {
  //logic to delete book goes here

  res.json({
    message: "Book deleted successfully",
  });
};

exports.updateBooks = function (req, res) {
  // logic to update books goes here

  res.json({
    message: "Book updated succesfully",
  });
};

exports.singleBookFetch = async function (req, res) {
  //first capture what id he/she is sending
  const id = req.params.id;
  const datas = await books.findByPk(id); //always return object
  // const datass = await books.findAll({ //yesore nee particular id ko nikalna sakinxa
  //   where : {
  //     id : id
  //   }
  // }) //always return an array 
  res.json({
    message: "Your desired book is fetched successfully",
    datas,
   // datass,
  });
};

// module.exports = {fetchBooks,addBooks,deleteBooks,updateBooks} //yesore nee export garna milxa
