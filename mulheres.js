const express = require('express');// iniciando o express
const router = express.Router(); // configurando a primeira parte da rota
const cors = require('cors') //trazendo o pacote cors que permite consumir essa API no front

const conexaoBD = require('./banco_de_dados')// ligando ao aqrquivo banco_de_dados
conexaoBD() // função que conecta o banco de dados

const  Mulher = require('./mulherModel');
const { default: mongoose } = require('mongoose');


const app = express(); // iniciando o app
app.use(express.json());
app.use(cors())
const porta = 3333 // criando a porta

// criando lista inicial de mulheres


//GET
  async function mostraMulheres(request, response) {
    try{ 
        const mulheresVindasdoBanco = await Mulher.find()
        response.json(mulheresVindasdoBanco)

    }catch(erro){
        console.log('Tente novamente', erro)

    }

}

//POST
async function criaMulher(request, response) { 
    const novaMulher = new Mulher({
    
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao:request.body.citacao
    
    
    })
    try{
        const mulherCriada = await novaMulher.save()
        response.status(201).json(mulherCriada)
    }catch(erro){
           console.log('Não foi possível salvar', erro)
    }

}

//PATCH
 async function alteraMulher(request, response) {
     try{
        const mulherEncontrada = await Mulher.findById(request.params.id)
        if (request.body.nome){
            mulherEncontrada.nome=request.body.nome
         }
         if (request.body.imagem){
            mulherEncontrada.imagem=request.body.imagem
         }
         if (request.body.minibio){
            mulherEncontrada.minibio=request.body.minibio
         }
         if (request.body.citacao){
            mulherEncontrada.citacao=request.body.citacao
         }
         const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save()
         response.json(mulherAtualizadaNoBancoDeDados)
     }catch(erro){
        console.log("Erro ao editar", erro)
     }
    
    }
     
// DELETE
async function deletaMulher(request ,response) {
    try{
        await Mulher.findByIdDelete(request.params.id)
        response.send('Exclusão efetuada com sucesso!');

    }catch(erro){
      comsole.log('Não foi possível excluir', erro)
    }
  
    }
    


//PORTA
function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulheres', mostraMulheres)) // configurei rota GET/ mulheres
app.use(router.post('/mulheres', criaMulher)) // configuerei rota POST/ mulheres
app.use(router.patch('/mulheres/:id',alteraMulher))// configurei a rota PACTH/mulheres/:id
app.use(router.delete("/mulheres/:id",deletaMulher))// configurei a rota DELETE/mulheres/:id
app.listen(porta, mostraPorta) // servidor ouvindo a porta
