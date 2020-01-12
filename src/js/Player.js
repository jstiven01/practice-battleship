import Ship from '../js/Ship'
const Player = (name, type) =>{
    const navalFleet = [Ship(5), Ship(4), Ship(3), Ship(3),Ship(2) ];

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
                console.log(position, orientation);
                flag = !gameBoard.placeShip(navalFleet[index], position, orientation);
            }
        }
    }


    return {
        name, type, setShips
    }

}
export default Player;