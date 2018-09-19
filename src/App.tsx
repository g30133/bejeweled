import * as React from 'react';
import * as C from './constants'
import './App.css';

import Board, { CellType } from './Board';
import Util from './Util';

interface AppState {
  board: CellType[]
}

class App extends React.Component<any, AppState> {
  twoCellsIxsToSwitch: number[]

  constructor(props:any) {
    super(props)

    this.onCellClicked = this.onCellClicked.bind(this)

    this.state = {
      board: []
    }

    this.twoCellsIxsToSwitch = []

    this.init()
  }

  private async init() {
    for (let i = 0; i < C.NUM_ROWS * C.NUM_COLS; i++) {
      let color:CellType = '.'
      const r = Math.random()
      if (r < 0.14) {
        if((this.state.board[i - 1] !== 'r' || this.state.board[i - 2] !== 'r') &&
            (this.state.board[i - C.NUM_COLS] !== 'r' || this.state.board[i - (2*C.NUM_COLS)] !== 'r')) {
          color = 'r'
        } else {
          console.log('three color in a row:' + i)
          i--
          continue
        }
      } else if (r < 0.28) {
        if((this.state.board[i - 1] !== 'o' || this.state.board[i - 2] !== 'o') &&
            (this.state.board[i - C.NUM_COLS] !== 'o' || this.state.board[i - (2*C.NUM_COLS)] !== 'o')) {
          color = 'o'
        } else {
          console.log('three color in a row' + i)
          i--
          continue
        }
      } else if (r < 0.42) {
        if((this.state.board[i - 1] !== 'y' || this.state.board[i - 2] !== 'y') &&
            (this.state.board[i - C.NUM_COLS] !== 'y' || this.state.board[i - (2*C.NUM_COLS)] !== 'y')) {
          color = 'y'
        } else {
          console.log('three color in a row' + i)
          i--
          continue
        }
      } else if (r < 0.57) {
        if((this.state.board[i - 1] !== 'g' || this.state.board[i - 2] !== 'g') &&
            (this.state.board[i - C.NUM_COLS] !== 'g' || this.state.board[i - (2*C.NUM_COLS)] !== 'g')) {
          color = 'g'
        } else {
          console.log('three color in a row' + i)
          i--
          continue
        }
      } else if (r < 0.71) {
        if((this.state.board[i - 1] !== 'b' || this.state.board[i - 2] !== 'b') &&
            (this.state.board[i - C.NUM_COLS] !== 'b' || this.state.board[i - (2*C.NUM_COLS)] !== 'b')) {
          color = 'b'
        } else {
          console.log('three color in a row' + i)
          i--
          continue
        }
      } else if (r < 0.86) {
        if((this.state.board[i - 1] !== 'p' || this.state.board[i - 2] !== 'p') &&
            (this.state.board[i - C.NUM_COLS] !== 'p' || this.state.board[i - (2*C.NUM_COLS)] !== 'p')) {
          color = 'p'
        } else {
          console.log('three color in a row' + i)
          i--
          continue
        }
      } else if (r < 1) {
        if((this.state.board[i - 1] !== 'w' || this.state.board[i - 2] !== 'w') &&
            (this.state.board[i - C.NUM_COLS] !== 'w' || this.state.board[i - (2*C.NUM_COLS)] !== 'w')) {
          color = 'w'
        } else {
          console.log('three color in a row' + i)
          i--
          continue
        }
      }
      this.state.board.push(color)
    }
  }

  public onCellClicked(cellIx:number) {
    console.log('onCellClicked()')
    const newBoard = Array.from(this.state.board)

    this.twoCellsIxsToSwitch.push(cellIx)
    console.log('cellIx1: ' + this.twoCellsIxsToSwitch[0] + ' cellIx2: ' + this.twoCellsIxsToSwitch[1])
    if(this.twoCellsIxsToSwitch.length === 2) {
      if(Util.checkNeighboringCell(this.twoCellsIxsToSwitch[0], this.twoCellsIxsToSwitch[1])) {
        console.log('you hit two neighboring cells:' + this.twoCellsIxsToSwitch[0] + ' :' + cellIx)
        this.switchTwoCells(this.twoCellsIxsToSwitch[0], this.twoCellsIxsToSwitch[1], newBoard)
      }
      this.twoCellsIxsToSwitch = []
    }
//    newBoard[cellIx] = 'r'

    this.setState({
      board: newBoard
    }, () => {
      Util.checkForThreeInARow(this.state.board)
    })
  }

  private switchTwoCells(cellIx1:number, cellIx2:number, board:CellType[]) {
    const cell1Value = board[cellIx1]
    const cell2Value = board[cellIx2]
    board[cellIx1] = cell2Value
    board[cellIx2] = cell1Value
  }

  public render() {
    return (
      <div className="app">
        <Board
          board={this.state.board}
          onCellClicked={this.onCellClicked}
        />
      </div>
    );
  }
}

export default App;
