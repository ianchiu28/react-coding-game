import React from 'react';
import getScript from './Script';
import './App.css';

const delayTime = 500;

class Block extends React.Component {
	render() {
		// class
		let blockClass = 'block border border-dark rounded';
		if (this.props.value === 'r') {
			blockClass += ' road';
		} else if (this.props.value === 'x') {
			blockClass += ' obstacle';
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
				default:
					alert('Error: undefind direction!');
			}
		} else {
			blockClass += ' target';
		}

		// text
		let text = this.props.value;
		if (text !== text.toUpperCase()) {
			text = null;
		}

    	return (
      		<div className={blockClass}>
				<h5 className='block-text text-center'>
					{text}
				</h5>
      		</div>
    	);
  	}
}

class Board extends React.Component {
	drawBoard(current, direction) {
		// draw the board
		let board = [], line = [];
		for (let i = 0; i < current.length; i++) {
			line.push(
				<Block
					key={i.toString()}
					value={current[i]}
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
				'A', 'x', 'X', 'r', 'r', 'r', 'B', 'r', 'r',
				'r', 'x', 'x', 'x', 'x', 'r', 'r', 'x', 'x',
				'r', 'r', 'r', 'S', 'r', 'x', 'r', 'r', 'r',
				'x', 'x', 'r', 'r', 'r', 'x', 'x', 'x', 'r',
				'r', 'r', 'r', 'r', 'c', 'r', 'r', 'r', 'r',
				'r', 'r', 'x', 'x', 'x', 'r', 'r', 'r', 'r',
				'r', 'x', 'C', 'r', 'r', 'x', 'x', 'r', 'x',
				'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'x',
				'r', 'r', 'r', 'r', 'r', 'r', 'D', 'x', 'x'
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
		
		// hit the obstacle
		if (newBoard[newCarIndex] === 'x') {
			return true;
		}

		newBoard[newCarIndex] = newBoard[carIndex];
		newBoard[carIndex] = 'r';
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
        		<div className='game-info mb-5 d-flex flex-row'>
          			<h1 className='header'>DHC Go Go Car</h1>
          			<button className='btn btn-info w-25' onClick={this.handleButtonOnClick}>Go !</button>
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
}

export default App;
