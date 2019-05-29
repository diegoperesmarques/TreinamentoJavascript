var app = require("./config/server");

//Rotas
//var rotaNoticas = require("./app/routes/noticias")(app);

//var rotaHome = require("./app/routes/home.js")(app);

//var rotaFormularioInclusaoNoticia = require("./app/routes/formulario_inclusao_noticia");

app.listen(3000,
    function() {
        console.log("Servidor ON");
    }
);