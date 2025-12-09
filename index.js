require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000;

app.get('/', (req, res) => {
  res.send("Hello Brother!")
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

//get a List of Data

app.get('/data',(req,res) => {
  const data = [
    {
      id: 1,
      type: "Wasiq",
      employed: false
    },

    {
      id: 2,
      type: "Ali",
      employed: false
    },
    {
      id: 3,
      type: "Hussain",
      employed: true
    }
  ];
  res.send(data)
});


app.get('/jokes', (req,res) => {
  const jokes = [
    {
      id: 1,
      name: "First Joke is Always a Joke in itself!"
    },
     {
      id: 2,
      name: "Backend Server is ALways Running in itself!"
    },
     {
      id: 3,
      name: "We are Learning Backend today!"
    }
  ];
  res.send(jokes);
});

app.get('/guest',(req,res) => {
  const isGuess = true;
  if(isGuess !== false){
    console.log("Your Guess is not Accepted")
  }
  else{
    console.log("You are Correct! ")
  };

  res.send(isGuess);
})
