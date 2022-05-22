const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const fileUpload = require("express-fileupload");
const todoRoute = require("./routes/TodoRoutes");

dotenv.config();

//Environment variables
const port = process.env.PORT || 8952;
const db = process.env.DB_URL;

mongoose
  .connect(db)
  .then((res) => {
    console.log("CONNECTED TO DB");
  })
  .catch((err) => {
    console.log("ERROR OCCURED IN DB CONNECTION", err);
  });

const app = express();

//Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(fileUpload());

//Set template engine
app.set('views', './views');
app.set("view engine", "pug");

app.use("/api", todoRoute);

app.use('*',(req,res)=>{
    res.render('error');
})

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
