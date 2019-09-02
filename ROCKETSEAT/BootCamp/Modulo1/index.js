const express = require("express");

const app = express();

app.get('/', (req, res) => {
    return res.send(`Bem-vindo, ${req.query.nome}`);
});

app.get('/nome/:name', (req, res) => {
   // return res.send(`Bem-vindo, ${req.params.name}`);

   return res.json({
       message: `Bem-vindo, ${req.params.name}`
   });
});

app.listen(3000);