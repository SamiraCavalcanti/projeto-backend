const express = require('express')
const router = express.Router()

const app = express()

const porta = 3333

const mulheres = [
    {
        nome:'Samira Cavalcanti',
        imagem:'imagens/profile-pic (5).png',
        minibio:'Analista de Sistemas'


   },
   {
    nome:'Samira Cavalcanti',
    imagem:'imagens/profile-pic (5).png',
    minibio:'Analista de Sistemas'


},
{
    nome:'Samira Cavalcanti',
    imagem:'imagens/profile-pic (5).png',
    minibio:'Analista de Sistemas'


},

]

function mostraMulheres(requeire,response){
    response.json(mulheres)
}

function mostraPorta(){
  console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)
