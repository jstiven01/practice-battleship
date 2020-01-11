const GameBoard = () => {
    const board = [...Array(10)].map(x=>Array(10).fill(null));
    let shipCoordinates = [];

    const renderShipOnBoard = (ship, position, orientation) => {
        if (orientation === 'V') {
            for(let i= position.row; i< position.row + ship.length; i+=1){
                board[i][position.column]= 'S';
            }
        } else {
            for(let i= position.column; i< position.column + ship.length; i+=1){
                board[position.row][i]= 'S';
            }
        }
    }
/*
    const checkPosition = (initialPosition, finalPosition) {


 }*/  

    const validatePosition = (ship, position, orientation) => {
        for(let i=0; i < shipCoordinates.length; i+=1) {
            let initialRow = shipCoordinates[i].position.row;
            let initialCol = shipCoordinates[i].position.column;
            let finalRow = shipCoordinates[i].position.row + shipCoordinates[i].ship.length -1;
            let finalColumn = shipCoordinates[i].position.column + shipCoordinates[i].ship.length -1;
            
            if (shipCoordinates[i].orientation === 'V' && orientation === 'V' && ((position.row + ship.length - 1 >= initialRow && position.row + ship.length - 1 <= finalRow) || (position.row >= initialRow && position.row<= finalRow)) && initialCol === position.column) {
                return false;
            } else if (shipCoordinates[i].orientation === 'H' && orientation === 'V' && (position.row <= initialRow && position.row + ship.length - 1 >= initialRow) && (initialCol <= position.column && position.column <= finalColumn)){
                return false;
            } else if (shipCoordinates[i].orientation === 'V' && orientation === 'H' && (position.column <= initialCol && position.column + ship.length - 1 >= initialCol) && (initialRow <= position.row && position.row <= finalRow)){
                return false;
            } else if (shipCoordinates[i].orientation === 'H' && orientation === 'H' && ((position.column + ship.length - 1 >= initialCol && position.column + ship.length - 1 <= finalColumn) || (position.column >= initialCol && position.column <= finalColumn)) && initialRow === position.row) {
                return false;
            }
        }
        return true;
    } 
    
    const placeShip = (ship, position, orientation) => {
        if (!validatePosition(ship, position, orientation)) return false;
        shipCoordinates.push({ship, position, orientation});
        renderShipOnBoard(ship, position, orientation);
        console.log(board);
        return true;
    }

    return {
        placeShip,
    }

}
export default GameBoard;