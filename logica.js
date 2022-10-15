
const fs=require("fs");

const crearArchivo=async(M,e,g,)=>{

 
try{


let salida="";

for(let i=0;i<1;i++){

     salida=(`${i+1})."nombre:"${M}\n"edad":${e}\n"genero":${g}`);

}
fs.writeFileSync(`tabla-${M}.txt`,salida);
  
    return `tabla-de ${M}.txt`;

}catch (err){
    throw err;

}



}


module.exports={
    crearArchivo 

}





 

