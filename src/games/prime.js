import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const isPrime = (number) => {
  if (number <= 1) return false;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const generatePrimeData = () => {
  const randomNumber = getRandomNumber(1, 100);
  const description = `Question: ${randomNumber}`;
  const question = `Answer "yes" if given number is prime. Otherwise answer "no".`
  const isPrimeNumber = isPrime(randomNumber);
  const expectedAnswer = isPrimeNumber ? 'yes' : 'no';
  return [description, question, expectedAnswer];
};

const startPrimeGame = () => startGame(generatePrimeData);

export default startPrimeGame;
