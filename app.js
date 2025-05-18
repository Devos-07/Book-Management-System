const express = require("express"); //express lai import gareko
const app = express(); //express lai trigger/call/invoke gareko
require("./database/connection");
const bookRoute = require("./routes/bookRoute");
const cors = require("cors");
app.use(express.json());

//const app = require("express")()  =>mathi ko duita line lai yesore nee lekhna milxa => yo vneko import ra call sangai eutai line maa gareko

// localhost:4000/api+ /hello = localhost:4000/api/hello
// localhost:4000/api + /books/:id = localhost:4000/api/books/:id
// localhost:4000/api/haha/ + /books = localhost:4000/api/haha//books

app.use(cors({
  origin:"http://localhost:5173" //multiple link dinu xa vnya array vitra haalerw garnya,sabialai dinu xa vnya *
}))
app.use("/api/books", bookRoute);

app.listen(3000, function () {
  console.log("Server/Project has started successfully at port 3000 ");
});
