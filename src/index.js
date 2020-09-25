const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
let valores={};

const media= require('./media.js');

app.post("/media", (req, res) => {
const { nota1, nota2 } = req.body;
const valores = { nota1, nota2 };
const resultado={
  nota1 ,
  nota2 ,
  Media: media(valores)
};
res.status(201).json(resultado);
});



app.listen(3000, () => {
  console.log(`Media API is running!`);
});
