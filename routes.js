


module.exports = (app)=>{

  app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
  })
  
  app.get('/about',(req,res)=>{
    res.send('This is the about page')
  })
}



