const { response, request } = require("express");
const express = require("express"); //importa o módulo express
const app = express(); //inicia o express

//rota inicial
app.get("/",function(request,response){
    res.send("Seja-bem vindo usuário!!!");
})


//rota do cadastro de produtos
app.get("/produtos", function(req, res){
    res.send("<h1>Lista de Produtos!</h1>");
})


//rota com parametro
app.get("/consulta/:parametro", function(req,res){
    //req ---> dados enviados pelo cliente
    //res --> resposta enviada pelo servidor de volta ao cliente
    res.send("retorno consulta:" + req.params.parametro);
})

//rota com parametro opcional
app.get("/cadastro/:nome?", function(req,res){
    //req --> dados enviados pelo cliente
    var nome = req.params.nome;
    if(nome){
        res.send("<h1>produto " + nome + " criado!</h1>");
    }else{
        res.send("produto criado");
    }
})

/*
app.get("/login/:nome", function(request, response){
    let x = request.params.nome;
    if(x == undefined){
        response.end("Seja bem-vindo(a) usuário!");
    }else{
        response.end("Seja bem-vindo(a) " + x + "!");
    }
})*/

app.get("/login/", function(request,response){

    let nome = request.query.nome;
    let sobrenome = request.query.sobrenome;
    
    if(nome == undefined){
        response.end("Seja bem-vindo(a) usuario!");
    }else{
        response.end("Seja bem-vindo(a) " + nome + " " + sobrenome + "!");
    }
})


//criando app na porta 4000
app.listen(4000,function(erro){ 
    if(erro){
        console.log("Erro ao iniciar.");
    }else{
        console.log("Servidor iniciado.");
    }
})
