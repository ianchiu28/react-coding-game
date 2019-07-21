import React from 'react';
import getScript from './Script';
import logo from './logo.svg';
import './App.css';

const delayTime = 1000;

class Block extends React.Component {
	render() {
		let blockClass = 'block border border-dark rounded';
		if (this.props.value === 'r') {
			blockClass += ' road';
		} else if (this.props.value === 'c') {
			blockClass += ' car';
			switch (this.props.direction) {
				case 'N':
					blockClass += ' car-N';
					break;
				case 'E':
					blockClass += ' car-E';
					break;
				case 'S':
					blockClass += ' car-S';
					break;
				case 'W':
					blockClass += ' car-W';
					break;
			}
			
		} else {
			blockClass += ' target';
		}

    	return (
      		<div className={blockClass}>
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

	drawBoard(current, direction) {
		// draw the board
		let board = [], line = [];
		for (let i = 0; i < current.length; i++) {
			line.push(
				<Block
					key={i.toString()}
					value={current[i]}
					coordinateX={this.coordinateX(i)}
					coordinateY={this.coordinateY(i)}
					direction={direction}
				/>
			);

			// new line
			let newLineIndex = i % 9;
			if (newLineIndex === 8) {
				board.push(<div key={i.toString()} className='d-flex flex-row'>{line}</div>);
				line = [];
			}
		}
		return board;
	}

	render() {
		const current = this.props.board.slice();
		const direction = this.props.direction;
		return this.drawBoard(current, direction);
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
				'r', 'r', 'r', 'r', 'c', 'r', 'r', 'r', 'r',
				'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r',
				'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r',
				'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r',
				'C', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'D'
			],
			direction: 'N',
			script: props.script
		}
	}

	actionMove() {
		// calculate where to go
		let carIndex = this.state.board.findIndex(e => e === 'c');
		let direction = this.state.direction;
		let newCarIndex;
		switch (direction) {
			case 'N':
				newCarIndex = carIndex - 9;

				// hit wall
				if (newCarIndex < 0) {
					return true;
				}
				break;
			case 'S':
				newCarIndex = carIndex + 9;

				// hit wall
				if (newCarIndex > 80) {
					return true;
				}
				break;
			case 'E':
				newCarIndex = carIndex + 1;

				// hit wall
				if (newCarIndex % 9 === 0) {
					return true;
				}
				break;
			case 'W':
				newCarIndex = carIndex - 1;

				// hit wall
				if (newCarIndex % 9 === 8) {
					return true;
				}
				break;
			default:
				alert('Error: undefind direction!');
				return;
		}

		// update board
		let newBoard = this.state.board.slice();
		let tmp = newBoard[carIndex];
		newBoard[carIndex] = newBoard[newCarIndex];
		newBoard[newCarIndex] = tmp;
		this.setState({
			board: newBoard
		});
	}

	actionTurnLeft() {
		// calculate where to go
		let direction = this.state.direction;
		let newDirection;
		switch (direction) {
			case 'N':
				newDirection = 'W';
        		break;
      		case 'S':
        	  	newDirection = 'E';
        		break;
      		case 'E':
          		newDirection = 'N';
        		break;
      		case 'W':
          		newDirection = 'S';
        		break;
      		default:
        		alert('Error: undefind direction!');
    	}

    	// update direction
    	this.setState({
      		direction: newDirection
    	});
  	}

  	actionTurnRight() {
    	// calculate where to go
    	let direction = this.state.direction;
    	let newDirection;
    	switch (direction) {
      		case 'N':
        		newDirection = 'E';
        		break;
      		case 'S':
          		newDirection = 'W';
        		break;
      		case 'E':
          		newDirection = 'S';
        		break;
      		case 'W':
          		newDirection = 'N';
        		break;
      		default:
        		alert('Error: undefind direction!');
    	}

    	// update direction
    	this.setState({
      		direction: newDirection
    	});
  	}

  	runScript() {
	    let script = this.state.script.slice();

    	// stop interval
    	if (script.length === 0) {
      		clearInterval(this.timerId);
      		return;
    	}

    	// run the first command
    	const command = script.shift();
    	let isHitWall;
    	switch (command) {
      		case 'move':
        		isHitWall = this.actionMove();
        		break;
      		case 'turnLeft':
        		this.actionTurnLeft();
        		break;
      		case 'turnRight':
        		this.actionTurnRight();
        		break;
      		default:
        		alert('Error: undefined script!');
    	}

    	// hit the wall, game over
    	if (isHitWall) {
      		alert('Game Over!');
      		script = [];
    	}

    	// update script
    	this.setState({
      		script: script
    	});
  	}

  	handleButtonOnClick() {
	    // start interval, run a command every ${delayTime} ms
	    this.timerId = setInterval(() => this.runScript(), delayTime);
  	}

	render() {
	    return (
      		<div className='game h-100 d-flex flex-column justify-content-center align-items-center'>
        		<div className='game-info mb-5'>
          			<h1>DHC Go Go Car</h1>
          			<h1>Direction: {this.state.direction}</h1>
          			<button onClick={this.handleButtonOnClick}>Go!</button>
        		</div>
        		<div className='game-board mb-5'>
          			<Board board={this.state.board} direction={this.state.direction}/>
        		</div>
      		</div>
    	);
  	}
}

function App() {
	return (
	    <Game script={getScript()}/>
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
