

//Importamos express pero no le ponemos la ruta porque por defecto lo va a buscar en la carpeta node-modules
import express from "express"

//Creamos una costante con el nombre servidor para "crear" un servidor nuevo con la función express
const servidor = express();

//La petición entrará en el callback
/*servidor.use("/prueba",(peticion,respuesta) => {

    //El método send se encarga de poner la cabecera y todo lo demás
    //Cualquier petición que llegue de arriba, se responde por este método
    respuesta.send("Esta es la respuesta");

});

//Le decimos a esa constante servidor que "escuche" en un puerto
servidor.listen(3000);*/

/* ------------------------------------------------- */ 

servidor.use(express.static("./estaticos"));

//Middleware específico
servidor.get("/color",(peticion,respuesta) => {

    //Creamos una variable con arrays de colores aleatorios
    let [r,g,b] = [0,0,0].map(() => Math.floor(Math.random() * 256));

    //Queremos enviarle una respuesta que contenga un objeto
    respuesta.json({r,g,b});
});

//Ponemos un mensaje para que no aparezca el "cannot get" en el caso de que en la url le solicitemos otra cosa
servidor.use((peticion,respuesta) => {
    respuesta.status(404);
    respuesta.send("404 not found");
});

//Le decimos a esa constante servidor que "escuche" en un puerto
servidor.listen(process.env.PORT || 3000);