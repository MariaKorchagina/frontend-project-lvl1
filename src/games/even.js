import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateEvenData = () => {
  const randomNumber = getRandomNumber(1, 100);
  const question = `Question: ${randomNumber}`;

  const expectedAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [question, expectedAnswer];
};

const startEvenGame = () => startGame(description, generateEvenData);

export default startEvenGame;
