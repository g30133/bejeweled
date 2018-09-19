import * as C from './constants'
import { CellType } from './Board'

class Util {

    public static dumpBoard(board:CellType[]) {
        let dump:string = ''
        for (let cellIx = 0; cellIx < C.NUM_ROWS*C.NUM_COLS; cellIx++) {
            if (cellIx % C.NUM_COLS === 0) {
                dump += '\n'
            }
            dump += board[cellIx]
        }
        console.log(dump)
    }

    public static checkNeighboringCell(cell1Ix:number, cell2Ix:number) {
        if(cell1Ix === cell2Ix + 1 || cell1Ix === cell2Ix - 1 ||
            cell1Ix === cell2Ix + C.NUM_COLS || cell1Ix === cell2Ix - C.NUM_COLS) {
            if(cell1Ix % C.NUM_COLS === C.NUM_COLS - 1 && cell2Ix % C.NUM_COLS === 0) {
                return false
            } else {
                return true
            }
        }
        return false
    }

    public static checkForThreeInARow(board:CellType[]) {
        //TODO
    }
}

export default Util