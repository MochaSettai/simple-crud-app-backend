import express from "express";
import productRoute from "./routes/product.route.js";
import { connectDB } from "./database.js";
const app = express();

// Middlewares
app.use(express.json()); // Configuration for passing json through Node.js
app.use(express.urlencoded({extended: false})); // Configuration for passing URL Encoded Form through Node.js

// Routes
app.use("/api/products", productRoute);



app.get("/", (req, res) => {
  	res.send("Hello from Node API");
});



// Database connection
connectDB().then(() => {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
});