const express = require('express');
const app = express();
const port = 3000
const bodyParser = require('body-parser');

// serving static files
app.use(express.static('public'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))


// Import routes
require('./routes')(app);

app.set('view engine', 'ejs');



app.listen(port,()=>{
  console.log("Server is running on port " + port)
})

