import express from "express";
import mongoose from "mongoose";
import Product from "./models/product.model.js";
import productRoute from "./routes/product.route.js";
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
mongoose
  .connect(
	"mongodb+srv://admin:VLclRSWHTMxNUb5P@backenddb.dqea9ml.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
		console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
	console.log("Connection failed!");
  });
