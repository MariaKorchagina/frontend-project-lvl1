import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (number1, number2) => {
  if (number2 === 0) return number1;
  return gcd(number2, number1 % number2);
};

const generateBiggestDivisor = () => {
  const randomNumber1 = getRandomNumber(1, 100);
  const randomNumber2 = getRandomNumber(1, 100);
  const question = `Question: ${randomNumber1} ${randomNumber2}`;

  const expectedAnswer = String(gcd(randomNumber1, randomNumber2));
  return [question, expectedAnswer];
};

const startGcdGame = () => startGame(description, generateBiggestDivisor);

export default startGcdGame;
