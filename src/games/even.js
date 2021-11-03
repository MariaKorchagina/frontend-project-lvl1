import { startGame } from '../index.js';

const isEven = (number) => number % 2 === 0;

const generateEvenData = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  const question = `Question: ${randomNumber} \nAnswer "yes" if the number is even, otherwise answer "no".`;
  const expectedAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [question, expectedAnswer];
};

const startEvenGame = () => startGame(generateEvenData);

export default startEvenGame;
