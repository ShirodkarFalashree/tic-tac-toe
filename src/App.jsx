import React,{useState} from "react"
import './App.css'
import TicTacToe from "./components/TicTacToe"

function App() {
return(
  <div>
    <TicTacToe boardSize={4}/>
  </div>
  
)
}

export default App
