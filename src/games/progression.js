import startGame from '../index.js';

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const progression = (number, arraySize, step) => {
  const arr = [];
  let getRandom = number;
  for (let i = 0; i < arraySize; i += 1) {
    if (i === 0) {
      arr.push(number);
    } else {
      arr.push(getRandom);
    }
    getRandom += step;
  }
  return arr;
};

const hideElement = (array, index) => {
  const hiddenArray = array;
  hiddenArray[index] = '..';
  return hiddenArray;
};

const generateProgressionData = () => {
  const randomNumber = Math.floor(Math.random() * 10);
  const randomStep = Math.floor(getRandomArbitrary(1, Math.random() * 10));
  const randomLenght = Math.floor(getRandomArbitrary(5, 11));
  const hiddenNumber = Math.floor(getRandomArbitrary(0, randomLenght - 1));
  const callArray = progression(randomNumber, randomLenght, randomStep);
  const expectedAnswer = callArray[hiddenNumber];
  hideElement(callArray, hiddenNumber);
  const question = `Question: ${callArray.join(' ')} \nWhat number is missing in the progression?`;
  return [question, expectedAnswer];
};

const startProgressionGame = () => startGame(generateProgressionData);

export default startProgressionGame;
