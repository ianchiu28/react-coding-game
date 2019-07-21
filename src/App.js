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

    let line1 = [], line2 = [], line3 = [], line4 = [], line5 = [], line6 = [], line7 = [], line8 = [], line9 = [];
    for (let i = 0; i < current.length; i++) {
      let row = parseInt(i / 9);
      switch (row) {
        case 0:
          line1.push(<Block value={this.coordinate(i)}/>);
          break;
        case 1:
          line2.push(<Block value={this.coordinate(i)}/>);
          break;
        case 2:
          line3.push(<Block value={this.coordinate(i)}/>);
          break;
        case 3:
          line4.push(<Block value={this.coordinate(i)}/>);
          break;
        case 4:
          line5.push(<Block value={this.coordinate(i)}/>);
          break;
        case 5:
          line6.push(<Block value={this.coordinate(i)}/>);
          break;
        case 6:
          line7.push(<Block value={this.coordinate(i)}/>);
          break;
        case 7:
          line8.push(<Block value={this.coordinate(i)}/>);
          break;
        case 8:
          line9.push(<Block value={this.coordinate(i)}/>);
          break;
      }
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
