const fs = require("fs")
const rutaDeArchivo= "./bicicletas.json"
const leerJSON =()=>{
const bicicletasSjon=fs.readFileSync(rutaDeArchivo, 'utf-8')

const bicicletasjs= JSON.parse (bicicletasSjon)
return bicicletasjs
}
module.exports = {leerJSON}
