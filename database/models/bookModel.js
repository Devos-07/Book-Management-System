//books, bookName, bookPrice, bookAuthor, bookGenre

const bookModel = (sequelize, DataTypes) => {
  const book = sequelize.define("Book", {
    bookName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bookPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bookAuthor: {
      type: DataTypes.STRING,
      defaultValue: "Anonymous",
    },
    bookGenre: {
      type: DataTypes.STRING,
    },
  });
  return book;
};

module.exports = bookModel;
