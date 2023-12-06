//acessando o express      guardando o pacote express ,requeire é uma instrução que ajuda a requerer as informações
// pegue o pacote express e deixe disponível aqui no meu código
const express = require('express')
//rota
const router = express.Router()

//Agora chame a função express para criar uma aplicação e guarde na app constante.
//função express
const app = express()
//Defina o número da porta e a função mostraPorta.
const porta = 3333
//parametros request e response
function mostraOla( request,response){
    response.send("Olá, Mundo!")

}

function mostraPorta(){
  console.log("Servidor criado e rodando na porta", porta)
}
//E por fim computador, faça esse app escutar, ou seja chame a função listen, informando o endereço da porta e o identificador da função mostraPorta, mas desta vez sem os parênteses
//lingando a porta
app.listen(porta, mostraPorta)
app.use(router.get('/ola', mostraOla))