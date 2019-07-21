import React from 'react';
import logo from './logo.svg';
import './App.css';

class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinateX: props.coordinateX,
      coordinateY: props.coordinateY,
      value: props.value
    };
  }

  render() {
    return (
      <div className='border border-dark rounded'>
        {this.state.value + '(' + this.state.coordinateX + ',' + this.state.coordinateY + ')'}
      </div>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(81).fill(null)
    };
  }

  coordinateX(position) {
    return (-4 + (position % 9)).toString();
  }

  coordinateY(position) {
    return (4 - parseInt(position / 9)).toString();
  }

  render() {
    const current = this.state.board.slice();

    // draw the board
    let board = [], line = [];
    for (let i = 0; i < current.length; i++) {
      line.push(
        <Block
          value={' '}
          coordinateX={this.coordinateX(i)}
          coordinateY={this.coordinateY(i)}
        />
      );

      // new line
      let newLineIndex = i % 9;
      if (newLineIndex === 8) {
        board.push(<div className='d-flex flex-row'>{line}</div>);
        line = [];
      }
    }

    return (
      <div>
        {board}
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className='game'>
        <div className='game-info'>
          <h1>this is game-info</h1>
        </div>
        <div className='game-board'>
          <Board />
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <Game />
  );

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
