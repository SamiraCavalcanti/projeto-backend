const mongoose = require('mongoose')
require('dot.env').config()

async  function conexaoBD (){
  
try{
 console.log('Conexão com o Banco de Dados iniciada')

 await mongoose.connect(process.env.MONGO_URL)
 
  console.log('Conexão realizada com sucesso!')
  }  catch(erro){
    console.log('Erro na Conexão: ', erro)
} 

}
 module.exports = conexaoBD 