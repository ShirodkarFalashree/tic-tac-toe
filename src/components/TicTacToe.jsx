import React,{useState} from "react"
import '../App.css'

const intialBoard=()=>Array(9).fill(null)

const TicTacToe = () => {
  const [board, setboard] = useState(intialBoard())
  console.log(board);
  return (
    <div className="game">

    <div className="status">
      Play x playing
      <button>Reset Game</button>
    </div>
    <div className="board">
      {board.map((_,index)=>{
        return <button className="cell" key={index}>x</button>
      })}
    </div>
  </div>
  )
}

export default TicTacToe