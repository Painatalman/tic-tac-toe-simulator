import React from 'react';
import { Container, Row, Col } from "@nextui-org/react";
import { Board } from '../../../TicTacToe/types';
import { Grid } from '@nextui-org/react';
import PlayPiece from './PlayPiece';

interface Props {
  play: Board
}

export default function TicTacToePlay({play}:Props) {
  return (
    <Grid.Container gap={2}>
      {play.flat().map((playPiece, i) => <Grid xs={4} key={i}><PlayPiece  playerSymbol={playPiece} /></Grid>)}
    </Grid.Container>
  );
}
