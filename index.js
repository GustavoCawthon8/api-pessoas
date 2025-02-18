const express = require('express');

const m = "Masculino";
const f = "Feminino";
const PORT = process.env.PORT || 5000;
const app = express();

const pessoas = [
  {id: 1, nome: "Gustavo", idade: 16, genero: m},
  {id: 2, nome: "Maria", idade: 17, genero: f},
  {id: 3, nome: "Gabriela", idade: 56, genero: f},
  {id: 4, nome: "Caio", idade: 11, genero: m},
  {id: 5, nome: "Kevin", idade: 18, genero: m},
  {id: 6, nome: "Elisa", idade: 21, genero: f},
  {id: 7, nome: "Garibalda", idade: 14, genero: f}
]

app.get("/pessoas", (req, res)=>{
  res.json(pessoas)
})

app.get("/pessoas/:id", (req, res)=>{
  const pessoa = pessoas.find(p => p.id === parseFloat(req.params.id));
  if(!pessoa){
    return res.status(404).json({messgae: "Pessoa não encontrada"})
  }
  res.json(pessoas)
})
app.listen(PORT, ()=>{
  console.log(`Servidor rodando na porta http://localhost:${PORT}/pessoas`)
})
