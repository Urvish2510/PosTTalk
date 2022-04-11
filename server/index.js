import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js"

dotenv.config();

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);
app.use("/user", userRoutes);

// const CONNECTION_URL = process.env.CONNECTION_URL;

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() =>
    app.listen(1155, () =>
      console.log(`Server running on PORT http://localhost:1155`)
    )
  )
  .catch((error) => console.log(error.message));
