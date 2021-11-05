import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const calc = (number1, number2, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      result = null;
      break;
  }
  return result;
};

const generateGameData = () => {
  const signs = ['+', '-', '*'];
  const randomOperator = signs[getRandomNumber(1, 3)];
  const randomNumber1 = getRandomNumber(1, 100);
  const randomNumber2 = getRandomNumber(1, 100);
  const description = `Question: ${randomNumber1} ${randomOperator} ${randomNumber2}`;
  const question = `What is the result of the expression?`;
  const expectedAnswer = String(calc(randomNumber1, randomNumber2, randomOperator));
  return [description, question, expectedAnswer];
};

const startCalcGame = () => startGame(generateGameData);

export default startCalcGame;
