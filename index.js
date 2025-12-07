require('dotenv').config()
const { config } = require('dotenv')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req,res) => {
    res.send("<h1>Hello My Name is Wasiq</h1>")
})

app.get('/aboutUs', (req,res) => {
    res.send("We are PulseBox and we Demand the World to use our Applciation or Else we will Destroy of the Entire World and Never Let the Humanity come back to rise again!")
})

app.get('/contactus', (req,res) => {
    res.send(`${process.env.PORT} is the port`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
