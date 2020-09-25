const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
let valores={}

const media= require('./media');

app.post("/media", (req, res) => {

const { nota1, nota2 } = req.body;
const valores = { nota1, nota2 };
valores.push(media(nota1,nota2));


  res.status(201).json(valores);
});


app.get('media', (req, res) => {
  const nota1 = Number(req.query.nota1);

  const nota2 = Number(req.query.nota2);


  


app.listen(3000, () => {
  console.log(`Media API is running!`);
});


