import Ship from '../js/Ship'

const Player = (name, type, navalFleet) =>{
    let turn;

    const getTurn = ()=> turn ;

    const setTurn = (bool) => turn = bool;

    const randomPosition = (length = 0) => {

        while (true) {
            let row = Math.round(Math.random() * 9);
            let column = Math.round(Math.random() * 9);
            if (length !== 0 && row + length < 10 && column + length < 10){
                return {row, column}
            }else if (length === 0) {
                return {row, column}
            }
        } 
    }

    const setShips = (gameBoard)=> {
        for (let index = 0; index < navalFleet.length; index += 1) {
            let flag = true;
            while (flag) {
                let orientation = Math.round(Math.random()) === 0 ? 'H' : 'V';
                let position = randomPosition(navalFleet[index].length)
                flag = !gameBoard.placeShip(navalFleet[index], position, orientation);
            }
        }
    }

    const attackRival = (board, position = {}) => {
        let positionToAttack = position;
        if(type === 'C') {
            positionToAttack = randomPosition();
        }
        board.receiveAttack(positionToAttack);
        if(!board.getIsHit()) turn = false;
    }


    return {
        name, type, setShips, getTurn, attackRival, setTurn,
    }

}
export default Player;