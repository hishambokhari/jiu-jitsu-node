const express = require('express');
const app = express();

let data = ['leg locks','front headlocks']

// const subData = ['toe holds','rear naked choke']

module.exports = (app)=>{

  //get Routes
  app.get('/',(req,res)=>{
    res.render('home',{systems:data})
  })

  app.get('/about',(req,res)=>{
    res.render('about')
  })
  // post routes
  app.post('/sent',(req,res)=>{

    data.push(req.body.item)
    res.send(data)
    console.log(data)
  })

  // delete route

  app.delete('/remove/:id',(req,res)=>{

   data = data.map(item=>{
      if(item!=req.params.id){
        return item
      }
    })
    console.log("receiving",req.params.id)
    res.send(data)
  })

}



