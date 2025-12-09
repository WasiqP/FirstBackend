import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';
import axios from "axios";
import { response } from 'express';

function App() {


  const [data, setData] = useState([]);
  const [jokes, setJokes] = useState([]);

  
  useEffect(() => {
    axios.get('http://localhost:3000/jokes')
    .then((response) => {
      setJokes(response.jokes)
    })
    .catch((error) => {
      console.log(error)
    })
    }
  )


  useEffect(() => {
    axios.get('http://localhost:3000/data')
    .then((respones)=> {
      setData(respones.data)
    })
    .catch((error) => {
      console.log(error)
    })
  })

  return (
    <>
    <h1>Me and My Data!</h1>
    <p>Data: {data.length}</p>

    {
      data.map((data, index) => {
        <div key={data.id}>
          <h3>{data.type}</h3>
          <h3>{data.employed}</h3>
        </div>
      })
    }

    <h1>Me and My Jokes</h1>
    <p>Jokes: {jokes.length}</p>

    {
      jokes.map((jokes,index) => {
        <div key = {jokes.id}>
          <h3>{jokes.id}</h3>
          <h3>{jokes.name}</h3>
        </div>
      })
    }
    </>
  )
} 

export default App
