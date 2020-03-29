const express = require('express');
const app = express();
const port = 3000

// serving static files
app.use(express.static('public'))

// Import routes
require('./routes')(app);

app.listen(port,()=>{
  console.log("Server is running on port " + port)
})

