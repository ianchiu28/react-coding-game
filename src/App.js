import React from 'react';
import logo from './logo.svg';
import './App.css';

class Block extends React.Component {
  render() {
    return (
      <div className='border border-dark rounded'>
        {this.props.value}
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

  render() {
    const current = this.state.board.slice();
    let draw = [];
    for (let i = 0, x = -4, y = 4; i < current.length; i++) {
      draw.push(<div className='border border-dark rounded'>{x.toString() + ',' + y.toString()}</div>);
      x++;
      if (x === 5) {
        x = -4;
        y--;
      }
    }

    return (
      <div className=''>
        <div className='d-flex flex-row'>
          {draw[0]}
          {draw[1]}
          {draw[2]}
          {draw[3]}
          {draw[4]}
          {draw[5]}
          {draw[6]}
          {draw[7]}
          {draw[8]}
        </div>
        <div className='d-flex flex-row'>
          {draw[9]}
          {draw[10]}
          {draw[11]}
          {draw[12]}
          {draw[13]}
          {draw[14]}
          {draw[15]}
          {draw[16]}
          {draw[17]}
        </div>
        <div className='d-flex flex-row'>
          {draw[18]}
          {draw[19]}
          {draw[20]}
          {draw[21]}
          {draw[22]}
          {draw[23]}
          {draw[24]}
          {draw[25]}
          {draw[26]}
        </div>
        <div className='d-flex flex-row'>
          {draw[27]}
          {draw[28]}
          {draw[29]}
          {draw[30]}
          {draw[31]}
          {draw[32]}
          {draw[33]}
          {draw[34]}
          {draw[35]}
        </div>
        <div className='d-flex flex-row'>
          {draw[36]}
          {draw[37]}
          {draw[38]}
          {draw[39]}
          {draw[40]}
          {draw[41]}
          {draw[42]}
          {draw[43]}
          {draw[44]}
        </div>
        <div className='d-flex flex-row'>
          {draw[45]}
          {draw[46]}
          {draw[47]}
          {draw[48]}
          {draw[49]}
          {draw[50]}
          {draw[51]}
          {draw[52]}
          {draw[53]}
        </div>
        <div className='d-flex flex-row'>
          {draw[54]}
          {draw[55]}
          {draw[56]}
          {draw[57]}
          {draw[58]}
          {draw[59]}
          {draw[60]}
          {draw[61]}
          {draw[62]}
        </div>
        <div className='d-flex flex-row'>
          {draw[63]}
          {draw[64]}
          {draw[65]}
          {draw[66]}
          {draw[67]}
          {draw[68]}
          {draw[69]}
          {draw[70]}
          {draw[71]}
        </div>
        <div className='d-flex flex-row'>
          {draw[72]}
          {draw[73]}
          {draw[74]}
          {draw[75]}
          {draw[76]}
          {draw[77]}
          {draw[78]}
          {draw[79]}
          {draw[80]}
        </div>
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
