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

exports.deleteBooks = async function (req, res) {
  //logic to delete book goes here
  //first maa hami, kun boook delete garna aateko tesko id lim
  const id = req.params.id; //const{id} = req.params
  //const id = req.body.id => yesore body bata nee lagna milxa

  //id paayapaxi tyo id ko books table bata hatuanya
  await books.destroy({
    where: {
      id,
      // id : id yesore nee lekhna milxa
    }, // delete from books table where id = id
  });

  res.json({
    message: "Book deleted successfully",
  });
};

exports.updateBooks = async function (req, res) {
  // logic to update books goes here
  //kun id ko update garnya first maa teslai linya
  const id = req.params.id;

  //k k update garnya tyo lekhnya
  const { bookName, bookPrice, bookAuthor, bookGenre } = req.body;
  await books.update(
    {
      bookName: bookName,  //keys ra value ko name same xa vnya eutai matra lekhna nee milxa => bookName
      bookPrice: bookPrice, //bookPrice
      bookAuthor: bookAuthor, //bookAuthor
      bookGenre: bookGenre, //format key : value
    },
    {
      where: {
        id: id,
      },
    }
  );

  res.json({
    message: "Book updated succesfully",
  });
};

exports.singleBookFetch = async function (req, res) {
  //first capture what id he/she is sending
  const id = req.params.id;
  const datas = await books.findByPk(id); //always return object

  // books.findAll({
  //     where : {
  //         bookName : "hello world",
  //         authorName : "John"
  //     }
  // })
  // }) // select * from books where bookName="hello world" && authorName = "manish"

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
