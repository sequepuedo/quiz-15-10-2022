

const argv = require("yargs")

.option("M", {
 alias:"nombre",
 type:"string",
 demandOption:true,
 describe:"va el nombre del la persona"

})
.option("e", {
    alias:"edad",
    type:"number",
    demandOption:true,
    describe:"edad"
 
})

.option("g",{
    alias:"genero",
    type:"string",
    demandOption:true,
    default:"no definido",
    describe:"genero de la persona"

})



.check((argv, options) => {

  if (typeof argv.M != "string" ) {
    throw "error digito un munero";
} 

if (isNaN(argv.e)) {
    throw "la edad tiene que ser un numero";
  }



  return true;
}).argv;


 module.exports=argv;