const {Router, response} = require('express');
const router = Router();
const {getConnection} = require('../database');
const {v4} = require('uuid');
var pdf = require('html-pdf');
const fs = require('fs');



router.get('/',  (req,res) =>{
    res.render('consultarIndicador')

});



router.get('/consultaSaldo/:rut', (req,res) =>{ 
   ejs.renderFile('consultarSaldo')
   const date = getConnection().get('cliente').find({rut : req.params.rut}).value();
    res.json(date);
  

});


router.post('/realizarTransferencia', (req,res,error) =>{

  try{
    const transaccion = {
        id: v4(),
        cuentaP : req.body.cuentaP,
        cuentaT : req.body.cuentaT,
        monto : req.body.monto
   };
  
   if(req.body.monto < 0){
       throw 'el dato es menor al saldo actual';
   }
   getConnection().get('operacion').push(transaccion).write();
   res.send(transaccion)

    operacion = `
    "cuentaP": "",
      "cuentaT": "",
      "monto": ""
    `;

   
   pdf.create(operacion).toFile('./templates/generado.pdf',function(err,res){
    if(err){
        console.log(err);
    } else {
        console.log(res);
    }
   });

  }catch(error){
    console.log(error)
  }
});





module.exports = router;








