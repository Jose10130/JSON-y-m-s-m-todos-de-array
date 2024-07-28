const datosBici=require('./datosBici.js')

const dhBici={
    bicicletas: datosBici.leerJSON(),
    buscarBici: function(id){
     const BiciEnc= this.bicicletas.filter((bici)=>
      { return bici.id=== id;
      }); 
      if (BiciEnc.length===0){
        return null;
      }
      return BiciEnc;

    },
    venderBici: function(id){
        const BiciEnc=  this.buscarBici(id)
        if (BiciEnc===null){
         return "“Bicicleta no encontrada”";}
        BiciEnc[0].vendida = true;
        return BiciEnc[0];
       },

       BiciParaLaVenta : function() {
        const BiciNoVendidas = this.bicicletas.filter((bici)=>{
        return !bici.vendida
    })
    return BiciNoVendidas
    },
    totalDeVentas :function(){
        const total= this.bicicletas.reduce((acum,bici)=>{
        if (bici.vendida){
          acum+=bici.precio;
        }
        return acum
        },0)
        return total
      }
     
      }
module.exports =dhBici
//console.log(dhBici.venderBici(3))
//console.log(dhBici.venderBici(2))
//console.log(dhBici.BiciParaLaVenta());
//console.log(dhBici.totalDeVentas())