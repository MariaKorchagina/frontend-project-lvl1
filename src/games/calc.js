import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';
const getCalcResult = (number1, number2, operator) => {
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
  const randomOperator = signs[getRandomNumber(1, signs.length)];
  const randomNumber1 = getRandomNumber(1, 100);
  const randomNumber2 = getRandomNumber(1, 100);
  const question = `Question: ${randomNumber1} ${randomOperator} ${randomNumber2}`;

  const expectedAnswer = String(getCalcResult(randomNumber1, randomNumber2, randomOperator));
  return [question, expectedAnswer];
};

const startCalcGame = () => startGame(description, generateGameData);

export default startCalcGame;
