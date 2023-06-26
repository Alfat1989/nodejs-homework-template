// SCWpCOq6A1c3xemw
// mongodb+srv://Alfat:SCWpCOq6A1c3xemw@cluster0.smzmkav.mongodb.net/
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const contactsRouter = require("./routes/api/contacts");

app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

const { DB_HOST, PORT } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => app.listen(PORT))
  .then(() => console.log("Database connection successful"))
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
