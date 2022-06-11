import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Middlewares
app.use("/posts", postRoutes);

const CONNECTION_URL =
  "mongodb+srv://cyklone:B,o,o,l,e,t1@cluster0.zyaw1.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() => console.log("DB connection successfull"))
  .catch((error) => console.log(error.message));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
