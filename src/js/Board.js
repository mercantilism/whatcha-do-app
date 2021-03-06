import React, { Component } from 'react';
import { v1 } from 'uuid';
import styled from 'styled-components';
import Stage from './Stage';

const BoardSegment = styled.section`
  width: 100vw;
  height: 50vh;
  display: flex;
  flex-wrap: nowrap;
  &.lowerBoardSegment {
    border-top: 1px solid black;
    border-radius: 25px;
  }
`;

class Board extends Component {
  state = {
    whatchaDo: {
      lists: [
        {
          id: v1(),
          title: "Here I can put one kind of thing I'm doing stuff for",
          items: [
            {
              id: v1(),
              title: "And here's a thing I did",
              description: 'I can say more about it here'
            }
          ]
        }
      ]
    },
    whatchaGonnaDo: {
      lists: [
        {
          id: v1(),
          title: "Here I can put add a kind of thing I'm going to do stuff for",
          items: [
            {
              id: v1(),
              title: "And here's a thing I'm gonna do",
              description: 'I can say more about it here'
            }
          ]
        }
      ]
    }
  };
  render() {
    return (
      <main className="board">
        <BoardSegment>
          <Stage stage={this.state.whatchaDo} />
        </BoardSegment>
        <BoardSegment className="lowerBoardSegment">
          <Stage stage={this.state.whatchaGonnaDo} />
        </BoardSegment>
      </main>
    );
  }
}

export default Board;
