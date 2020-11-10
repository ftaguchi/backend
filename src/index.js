// Importação do Express para dentro do arquivo
const express = require('express');

// Comando para criar a aplicação
const app = express();

// Permitir que o Express entenda arquivos do tipo JSON
// Esta instrução precisa vir antes das rotasS
app.use(express.json());

// Criação da rota project com uso de query params
app.get('/projects', (request, response)=>{

    // Desetruturação do query params
    const { title, owner } = request.query;
    console.log(title);
    console.log(owner);

    return response.json([
        'Projeto 1',
        'Projeto 2',
    ])
});

// Criação da rota devs com retorno JSON
app.get('/devs', (request, response)=>{
    return response.json({message:'Hello JSON'})
});

// Criação de uma rota post para cadastrar projeto com uso dos parâmetros Request Body
app.post('/projects', (request, response)=>{

    // Recuperando as informações que estão no corpo da requisição
    const {title, owner} = request.body;
    console.log(title);
    console.log(owner);

    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
    ])
});

// Criação de uma rota put para editar um projeto com uso do route params
app.put('/projects/:id', (request, response)=>{

    // Recuperar o valor do ID
    const params = request.params;
    console.log(params);

    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
    ])
});

// Criação de uma rota delete para excluir um projeto
app.delete('/projects/:id', (request, response)=>{
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
    ])
});

// Porta para o Node usar 
// Adicionado uma função para mensagem de execução do servidor
app.listen(3333, ()=> {
    console.log('Backend started!')
});