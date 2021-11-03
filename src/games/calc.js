import startGame from '../index.js';

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
      break;
  }
  return result;
};

const generateGameData = () => {
  const ops = ['+', '-', '*'];
  const randomOperator = ops[Math.floor(Math.random() * 3)];
  const randomNumber1 = Math.floor(Math.random() * 100);
  const randomNumber2 = Math.floor(Math.random() * 100);
  const question = `Question: ${randomNumber1} ${randomOperator} ${randomNumber2} \nWhat is the result of the expression?`;
  const expectedAnswer = calc(randomNumber1, randomNumber2, randomOperator);
  return [question, expectedAnswer];
};

const startCalcGame = () => startGame(generateGameData);

export default startCalcGame;
