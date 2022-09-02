
const express = require('express');

const app = express();
app.use(express.json());


app.get("/courses" , (request,response) => {
    return response.json(["Curso 1", "Curso 2", "Curso 3333"]);
  
});

app.post("/courses" , (request,response) => {
    const {login,senha} = request.body;
    console.log(login);
    return response.json(["Curso 1", "Curso 2", "Curso 3" , "Curso 4"]);
});

app.put("/courses/:id" , (request,response) => {
    const params = request.params;
    const query = request.query;
    console.log(params);
    console.log(query);
    return response.json(["Curso 1", "Curso 2", "Curso 3" , "Curso 14"]);
});



app.listen(3333);


