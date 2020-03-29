const express = require('express');

const app = express();

app.get('/', (request,response) =>{
    return response.json({
        evento:'semana omnistack 11.0',
        aluno:'Eduardo Alves'
    })
})

app.listen(3333);
