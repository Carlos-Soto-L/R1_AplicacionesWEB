const mongoose = require("mongoose");
const connection = mongoose.connect(`mongodb://localhost:27017/R1APLI`)
.then((db)=>{
    console.log("Conexion exitosa a mongoDB");
}).catch(()=>{
    console.log("Ah ocurrido un error: ");
})
module.exports = connection;