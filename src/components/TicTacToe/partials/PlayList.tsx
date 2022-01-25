import React from "react";
import { Row, Col, Text, Card, Spacer } from "@nextui-org/react";
import { Board } from "../../../TicTacToe/types";
import TicTacToePlay from "./Play";

interface Props {
  plays: Board[];
  winner: string;
}

export default function TicTacToePlayList({ plays, winner }: Props) {
  return (
    <>
      <Row>
        <Col>Winner: {winner}</Col>
      </Row>
      <Spacer y={1} />
      <Row wrap="wrap" justify="space-around">
        {plays.map((play, index) => (
          <Col key={index} css={{ mw: "240px" }}>
            <Card bordered shadow={false}>
              <Text>Play {index + 1}:</Text>
              <TicTacToePlay play={play} />
            </Card>
            <Spacer y={1} />
          </Col>
        ))}
      </Row>
    </>
  );
}
