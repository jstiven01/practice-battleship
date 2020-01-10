const Ship = (length) => {
    const shipArray = Array(length).fill(false);

    const hit = (position) => {
        if(!shipArray[position]) shipArray[position] = true;
    }

    const isSunk = () => {
        return shipArray.every(position => position === true);
    }

    return {
        hit, isSunk
    }


};
export default Ship;
