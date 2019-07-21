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

  coordinate(position) {
    return (-4 + (position % 9)).toString() + ',' + (4 - parseInt(position / 9)).toString();
  }

  render() {
    const current = this.state.board.slice();

    let line1 = [];
    for (let i = 0; i < 9; i++) {
      line1.push(<Block value={this.coordinate(i)}/>);
    }

    let line2 = [];
    for (let i = 9; i < 18; i++) {
      line2.push(<Block value={this.coordinate(i)}/>);
    }

    let line3 = [];
    for (let i = 18; i < 27; i++) {
      line3.push(<Block value={this.coordinate(i)}/>);
    }

    let line4 = [];
    for (let i = 27; i < 36; i++) {
      line4.push(<Block value={this.coordinate(i)}/>);
    }

    let line5 = [];
    for (let i = 36; i < 45; i++) {
      line5.push(<Block value={this.coordinate(i)}/>);
    }

    let line6 = [];
    for (let i = 45; i < 54; i++) {
      line6.push(<Block value={this.coordinate(i)}/>);
    }

    let line7 = [];
    for (let i = 54; i < 63; i++) {
      line7.push(<Block value={this.coordinate(i)}/>);
    }

    let line8 = [];
    for (let i = 63; i < 72; i++) {
      line8.push(<Block value={this.coordinate(i)}/>);
    }

    let line9 = [];
    for (let i = 72; i < 81; i++) {
      line9.push(<Block value={this.coordinate(i)}/>);
    }

    let newLine1 = <div className='d-flex flex-row'>{line1}</div>;
    let newLine2 = <div className='d-flex flex-row'>{line2}</div>;
    let newLine3 = <div className='d-flex flex-row'>{line3}</div>;
    let newLine4 = <div className='d-flex flex-row'>{line4}</div>;
    let newLine5 = <div className='d-flex flex-row'>{line5}</div>;
    let newLine6 = <div className='d-flex flex-row'>{line6}</div>;
    let newLine7 = <div className='d-flex flex-row'>{line7}</div>;
    let newLine8 = <div className='d-flex flex-row'>{line8}</div>;
    let newLine9 = <div className='d-flex flex-row'>{line9}</div>;

    return (
      <div>
        {newLine1}
        {newLine2}
        {newLine3}
        {newLine4}
        {newLine5}
        {newLine6}
        {newLine7}
        {newLine8}
        {newLine9}
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
