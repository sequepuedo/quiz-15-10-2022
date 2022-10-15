

const { crearArchivo } = require("./logica");

const argv=require("./yargs");

console.clear();


crearArchivo(argv.M,argv.e,argv.g)

  .then( nombreArchivo => console.log(nombreArchivo, "creado") )
  .catch( err => console.log( err) );