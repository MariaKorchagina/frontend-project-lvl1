import { startGame } from '../index.js';

const gcd = (number1, number2) => {
  if (number2 > number1) return gcd(number2, number1);
  if (!number2) return number1;
  return gcd(number2, number1 % number2);
};

const generateBiggestDivisor = () => {
  const randomNumber1 = Math.floor(Math.random() * 100);
  const randomNumber2 = Math.floor(Math.random() * 100);
  const question = `Question: ${randomNumber1} ${randomNumber2} \nFind the greatest common divisor of given numbers.`;
  const expectedAnswer = gcd(randomNumber1, randomNumber2);
  return [question, expectedAnswer];
};

const startGcdGame = () => startGame(generateBiggestDivisor);

export default startGcdGame;
