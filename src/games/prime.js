import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) return false;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const getPrimeGameData = () => {
  const randomNumber = getRandomNumber(1, 100);
  const question = `Question: ${randomNumber}`;
  const isPrimeNumber = isPrime(randomNumber);
  const expectedAnswer = isPrimeNumber ? 'yes' : 'no';
  return [question, expectedAnswer];
};

const startPrimeGame = () => startGame(description, getPrimeGameData);

export default startPrimeGame;
