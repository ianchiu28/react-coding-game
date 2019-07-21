import React from 'react';
import logo from './logo.svg';
import './App.css';

class Block extends React.Component {
  render() {
    return (
      <div className='border border-dark rounded'>
        {this.props.value + '(' + this.props.coordinateX + ',' + this.props.coordinateY + ')'}
      </div>
    );
  }
}

class Board extends React.Component {
  coordinateX(position) {
    return (' ' + (-4 + (position % 9)).toString()).slice(-2);
  }

  coordinateY(position) {
    return (' ' + (4 - parseInt(position / 9)).toString()).slice(-2);
  }

  render() {
    const current = this.props.board.slice();

    // draw the board
    let board = [], line = [];
    for (let i = 0; i < current.length; i++) {
      line.push(
        <Block
          key={i.toString()}
          value={current[i]}
          coordinateX={this.coordinateX(i)}
          coordinateY={this.coordinateY(i)}
        />
      );

      // new line
      let newLineIndex = i % 9;
      if (newLineIndex === 8) {
        board.push(<div key={i.toString()} className='d-flex flex-row'>{line}</div>);
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
  constructor(props) {
    super(props);
    this.handleButtonOnClick = this.handleButtonOnClick.bind(this);
    this.state = {
      board: [
        'A', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'B',
        'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r',
        'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r',
        'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r',
        'r', 'r', 'r', 'r', 'cN', 'r', 'r', 'r', 'r',
        'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r',
        'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r',
        'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r',
        'C', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'D'
      ],
      script: [
        'move',
        // 'turnLeft',
        // 'move',
        // 'turnRight',
        // 'move'
      ]
    }
  }

  actionMove() {
    this.setState({
      board: [
        'A', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'B',
        'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r',
        'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r',
        'r', 'r', 'r', 'r', 'CN', 'r', 'r', 'r', 'r',
        'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r',
        'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r',
        'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r',
        'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r',
        'C', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'D'
      ]
    });
  }

  actionTurnLeft() {

  }

  actionTurnRight() {

  }

  runScript() {
    const script = this.state.script.slice();
    for (let i = 0; i < script.length; i++) {
      switch(script[i]) {
        case 'move':
          console.log('move');
          this.actionMove();
          break;
        case 'turnLeft':
          console.log('turn left');
          break;
        case 'turnRight':
          console.log('turn right');
          break;
        default:
          alert('Error: undefined script!');
      }
    }
  }

  handleButtonOnClick() {
    this.runScript();
  }

  render() {
    return (
      <div className='game'>
        <div className='game-info'>
          <h1>this is game-info</h1>
          <button onClick={this.handleButtonOnClick}>Go!</button>
        </div>
        <div className='game-board'>
          <Board board={this.state.board}/>
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
