const express = require("express");
const bodyparser = require("body-parser"); //le cabeçalho e converte dados
const cors = require("cors"); //permite acesso seguro a recursos de outros dominios/sites

const api = express();
const router = express.Router();

api.use(cors()); //trata requisições que não é da mesma origem que a API
api.use(bodyparser.urlencoded({ extended: true })); //"urlencoded" recupera informações de formularios(por exemplo) e os converte
api.use(bodyparser.json({ limit: "20mb", extended: true })); //limita tamanho dos arquivos enviados (imagem,video,etc)

//tabelas
const usuariosTable = require("./models/usuariosTable");
const registrosTable = require("./models/registrosTable");

router.get("/", (req, res) =>
  res.json({
    retorno: "API em funcionamento..."
  })
);
api.use("/", router);

api.post("/registros", (req, res) => {
  registrosTable
    .create({
      data_ocorrido: req.body.data_ocorrido,
      tipo_ocorrencia: req.body.tipo_ocorrencia,
      nivel_gravidade: req.body.nivel_gravidade,
      logradouro: req.body.logradouro,
      cidade: req.body.cidade,
      estado: req.body.estado,
      n_casa: req.body.n_casa,
      observacoes: req.body.observacoes
    })
    .then(function() {
      res.send("Registro inserido com sucesso!");
    })
    .catch(function(erro) {
      res.send("Erro: " + erro);
    });
});

api.get("/registros", function(req, res) {
  registrosTable
    .findAll({})
    .then(function(dados) {
      res.send(dados);
    })
    .catch(function(erro) {
      res.send("Erro encontrado: " + erro);
    });
});

api.get("/registros/:id?", function(req, res) {
  registrosTable
    .findAll({
      where: {
        id: req.params.id
      }
    })
    .then(function(dados) {
      res.send(dados);
    })
    .catch(function(erro) {
      res.send("Erro encontrado: " + erro);
    });
});

api.delete("/registros/:id?", function(req, res) {
  registrosTable
    .destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dados) {
      res.send(dados);
    })
    .catch(function(erro) {
      res.send("Erro encontrado: " + erro);
    });
});

api.post("/usuarios", function(req, res) {
  usuariosTable
    .findAll({
      where: {
        login: req.body.login,
        senha: req.body.senha
      }
    })
    .then(function(dados) {
      let resposta = "";
      if (dados != "") {
        resposta = "Usuário encontrado";
      } else {
        resposta = "Usuário não encontrado";
      }

      res.send(resposta);
    })
    .catch(function(erro) {
      res.send("Erro encontrado: " + erro);
    });
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 9999;
}
api.listen(porta);
console.log(`Servidor funcionando na porta: ${porta}`);
