import React from 'react';
import { Board } from '../../TicTacToe/types';
import TicTacToePlayList from './partials/PlayList';

interface Props {
  plays: Board[],
  winner: string
}

export default function TicTacToe({winner, plays}:Props) {
  return <TicTacToePlayList winner={winner} plays={plays} />;
}

