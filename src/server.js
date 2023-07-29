const express = require("express");
const rutas = require("./router/index");
const app = express();
// const connection = require("./connectionMongoDB.js");


const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb+srv://daniel:pasword@cluster0.y1z0g.mongodb.net/r1apli01?retryWrites=true&w=majority";
MongoClient.connect(uri, {useUnifiedTopology: true }, (err, client) => {
  if (err) console.log("Error occurred connecting to MongoDB...",err.message);
  console.log("Connected to MongoDB!");
});

app.set('view engine', 'ejs');
app.set("views", __dirname + "/views");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(rutas);
app.listen(3000);
