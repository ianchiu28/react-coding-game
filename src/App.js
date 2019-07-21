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
      draw.push(x.toString() + ',' + y.toString());
      x++;
      if (x === 5) {
        x = -4;
        y--;
      }
    }

    let line1 = [];
    for (let i = 0; i < 9; i++) {
      line1.push(<Block value={draw[i]}/>);
    }

    let line2 = [];
    for (let i = 9; i < 18; i++) {
      line2.push(<Block value={draw[i]}/>);
    }

    let line3 = [];
    for (let i = 18; i < 27; i++) {
      line3.push(<Block value={draw[i]}/>);
    }

    let line4 = [];
    for (let i = 27; i < 36; i++) {
      line4.push(<Block value={draw[i]}/>);
    }

    let line5 = [];
    for (let i = 36; i < 45; i++) {
      line5.push(<Block value={draw[i]}/>);
    }

    let line6 = [];
    for (let i = 45; i < 54; i++) {
      line6.push(<Block value={draw[i]}/>);
    }

    let line7 = [];
    for (let i = 54; i < 63; i++) {
      line7.push(<Block value={draw[i]}/>);
    }

    let line8 = [];
    for (let i = 63; i < 72; i++) {
      line8.push(<Block value={draw[i]}/>);
    }

    let line9 = [];
    for (let i = 72; i < 81; i++) {
      line9.push(<Block value={draw[i]}/>);
    }

    return (
      <div>
        <div className='d-flex flex-row'>
          {line1}
        </div>
        <div className='d-flex flex-row'>
          {line2}
        </div>
        <div className='d-flex flex-row'>
          {line3}
        </div>
        <div className='d-flex flex-row'>
          {line4}
        </div>
        <div className='d-flex flex-row'>
          {line5}
        </div>
        <div className='d-flex flex-row'>
          {line6}
        </div>
        <div className='d-flex flex-row'>
          {line7}
        </div>
        <div className='d-flex flex-row'>
          {line8}
        </div>
        <div className='d-flex flex-row'>
          {line9}
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
