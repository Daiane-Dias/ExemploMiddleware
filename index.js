const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const path = require("path");
/*const meu_middleware = function(res,res,next){
    console.log("Executando o middleware");
    next();
};

const meu_middleware2 = function(res,res,next){
    console.log("Executando outro middleware");
    next();
};
 app.use(meu_middleware);
 app.use(meu_middleware2);*/

/*let get_request_time = function(req, res, next){
    let tempo_atual = Date.now();
    let hoje = new Date(tempo_atual);
    req.request_time = hoje.toUTCString();
    next();
}; 
app.use(get_request_time);
app.get('/',(req,res)=>{
    res.send("Olá!Você acessou em " +req.request_time);
    console.log("Estou sendo chamado na rota, apos o middleware.")
});*/
/*app.use('/tempo',function(req,res,next){
    let tempo_atual = Date.now();
    let hoje = new Date(tempo_atual);
    req.request_time = hoje.toUTCString();
    next();
});
app.get('/tempo',(req,res)=>{
    res.send("Olá!Você acessou em " +req.request_time);
    console.log("Estou sendo chamado na rota, apos o middleware.")
});
app.get('/',(req,res)=>{
    res.send("Estou no endereço raiz.");
});*/

/*app.use('/teste',function(req,res,next){
    console.log("Inicio");
    next();
});
app.get('/',(req,res,next)=>{
    res.send("Meio");
    next();
});
app.use('/teste',(req,res,next)=>{
    console.log("Fim");
});*/
app.use(bodyparser.urlencoded({extended:false}));
app.use('/login',express.static(__dirname + '/public/login'));

/*app.post('/login',(req, res)=>{
console.log("Login: "+ req.body.login_campo);
console.log("Senha: "+ req.body.senha_campo);

res.redirect('login/cadastro-clientes.html');
});*/

app.post('/login',(req, res)=>{
    console.log("Nome: "+ req.body.nome);
    console.log("Email: "+ req.body.email);
    console.log("Mensagem: "+ req.body.mensagem);
    res.redirect('/')
    
    });

/*app.set('view engine','pug');
app.set('views',path.join(__dirname,"views"));

app.get("/",(req,res) => {
res.render("index");
});*/
app.get('/',(req,res) =>{
res.send("Seja Bem-vindo(a)!");
});
app.get('*',(req,res) =>{
    res.send("Link inválido: 404");
    });
app.listen(3000,() =>console.log("Servidor escutando na porta 3000..."));