import { startGame } from '../index.js';

const isPrime = (number) => {
  if (number <= 1) return false;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const generatePrimeData = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  const question = `Question: ${randomNumber} \nAnswer "yes" if given number is prime. Otherwise answer "no".`;
  const isPrimeNumber = isPrime(randomNumber);
  const expectedAnswer = isPrimeNumber ? 'yes' : 'no';
  return [question, expectedAnswer];
};

const startPrimeGame = () => startGame(generatePrimeData);

export default startPrimeGame;
