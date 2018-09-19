import * as React from 'react';

//import * as C from './constants'
import './Board.css';

export type CellType = '.' | 'r' | 'o' | 'y' | 'g' | 'b' | 'p' | 'w'

interface BoardProps {
    board: CellType[]
    onCellClicked: (cellIx:number) => void
}

class Board extends React.Component<BoardProps> {
    public render() {
        const board = []
        for(let i = 0; i < this.props.board.length; i++) {
            let className = 'cell'
            switch(this.props.board[i]) {
                case '.':
                    className += ' empty'
                break
                case 'r':
                    className += ' r'
                break
                case 'o':
                    className += ' o'
                break
                case 'y':
                    className += ' y'
                break
                case 'g':
                    className += ' g'
                break
                case 'b':
                    className += ' b'
                break
                case 'p':
                    className += ' p'
                break
                case 'w':
                    className += ' w'
                break
                default:
            }
            console.log('className:' + className)
            board.push(
                <div key={i} className={className} onClick={
                    () => {
                        this.props.onCellClicked(i)
                    }
                }>{i}</div>
            )
        }
        return (
            <div className='board'>{board}</div>
        )
    }
}

export default Board