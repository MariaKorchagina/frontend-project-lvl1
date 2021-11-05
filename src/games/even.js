import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const isEven = (number) => number % 2 === 0;

const generateEvenData = () => {
  const randomNumber = getRandomNumber(1, 100);
  const description = `Question: ${randomNumber}`;
  const question = `Answer "yes" if the number is even, otherwise answer "no".`;
  const expectedAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [description, question, expectedAnswer];
};

const startEvenGame = () => startGame(generateEvenData);

export default startEvenGame;
