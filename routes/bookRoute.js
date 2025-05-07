const {
  fetchBooks,
  addBooks,
  deleteBooks,
  updateBooks,
  singleBookFetch,
} = require("../controllers/bookController");

const router = require("express").Router();
router.route("/").get(fetchBooks).post(addBooks);
router
  .route("/:id")
  .delete(deleteBooks)
  .patch(updateBooks)
  .get(singleBookFetch);

// router.get("/books", fetchBooks)
// router.post("/books",addBooks)   //Mathi ko process  laai yesore nee route garna milxa
// router.delete("/books/:id",deleteBooks)

module.exports = router;
