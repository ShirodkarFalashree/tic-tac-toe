import { useState } from "react";

const initialBoard = () => Array(9).fill(null);

const useTicTacToe = () => {
  const [board, setBoard] = useState(initialBoard());
  const [isNext, setIsNext] = useState(true);

  const WINNING_PATTERNS = [];

  const calculateWinner = () => {
    // Add your winner calculation logic here
  };

  const handleClick = (index) => {
    // Add your handle click logic here
  };

  const getStatusMessage = () => {
    // Add your status message logic here
  };

  const resetGame = () => {
    setBoard(initialBoard());
    setIsNext(true);
  };

  return {
    board,
    handleClick,
    calculateWinner,
    getStatusMessage,
    resetGame,
  };
};

export default useTicTacToe;
