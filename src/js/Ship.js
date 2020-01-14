const Ship = (length) => {
  const shipArray = Array(length).fill(false);

  const hit = (position) => {
    if (!shipArray[position]) shipArray[position] = true;
  };

  const isSunk = () => shipArray.every((position) => position === true);

  const getType = () => `${length}`;


  return {
    hit, isSunk, length, getType,
  };
};
export default Ship;
