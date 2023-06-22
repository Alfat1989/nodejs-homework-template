// SCWpCOq6A1c3xemw
// mongodb+srv://Alfat:SCWpCOq6A1c3xemw@cluster0.smzmkav.mongodb.net/
const mongoose = require("mongoose");
require("dotenv").config();

const { DB_HOST } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => console.log("Database connect"))
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
