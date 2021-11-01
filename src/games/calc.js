import {
  askName, askQuestion, isAnswerCorrect, printResponse,
} from '../index.js';

const generateAnswerCalc = () => {
  const name = askName();
  const round = 3;
  const ops = ['+', '-', '*'];
  for (let i = 0; i < round; i += 1) {
    const randomOperator = ops[Math.floor(Math.random() * 3)];
    const randomNumber1 = Math.floor(Math.random() * 100);
    const randomNumber2 = Math.floor(Math.random() * 100);
    const answer = askQuestion(`Question: ${randomNumber1} ${randomOperator} ${randomNumber2} `, 'What is the result of the expression?');
    let expectedResult;
    switch (randomOperator) {
      case '+':
        expectedResult = randomNumber1 + randomNumber2;
        break;
      case '-':
        expectedResult = randomNumber1 - randomNumber2;
        break;
      case '*':
        expectedResult = randomNumber1 * randomNumber2;
        break;
      default:
        break;
    }
    printResponse(name, expectedResult, answer, i);
    if (!isAnswerCorrect(expectedResult, answer)) {
      return;
    }
  }
};
export default generateAnswerCalc;
