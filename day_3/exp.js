const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('welcome to the hotel')
})

app.get('/pizza', (req, res) => {
    res.send('sure sir, your pizza ');
  })

  app.get('/idli', function (req, res) {
    var customize_idli = {
        name: "rava idli",
        price: 50,
        ingredients: ["rava", "curd", "water"],
        isSambhar: true
    }
    res.send(customize_idli)
  })
  

app.listen(3000, ()=>{
    console.log('server is running on port 3000')
})