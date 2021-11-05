import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const getProgression = (number, arraySize, step) => {
  const arr = [];
  for (let i = 0; i < arraySize; i += 1) {
    arr.push(number + i * step);
  }
  return arr;
};

const generateProgressionData = () => {
  const randomNumber = getRandomNumber(1, 10);
  const randomStep = getRandomNumber(1, 10);
  const randomLenght = getRandomNumber(5, 11);
  const hiddenNumber = getRandomNumber(0, randomLenght - 1);
  const callArray = getProgression(randomNumber, randomLenght, randomStep);
  const expectedAnswer = String(callArray[hiddenNumber]);
  callArray[hiddenNumber] = '..';
  const description = `Question: ${callArray.join(' ')}`;
  const question =` What number is missing in the progression?`
  return [description, question, expectedAnswer];
};

const startProgressionGame = () => startGame(generateProgressionData);

export default startProgressionGame;
