const express = require('express');
const app = express();

const data = ['leg locks','front headlocks','back attacks']; 

module.exports = (app)=>{

  app.get('/',(req,res)=>{
    res.render('home',{systems:data})
  })

  app.get('/about',(req,res)=>{
    res.render('about')
  })


}



