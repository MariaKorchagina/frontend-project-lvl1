import readlineSync from 'readline-sync';
import askName from '../index.js';

const generateAnswerCalc = () => {
  const name = askName();
  const round = 3;
  const ops = ['+', '-', '*'];
  for (let i = 0; i < round; i += 1) {
    const randomOperator = Math.floor(Math.random() * 3);
    const operator = ops[randomOperator];
    const randomNumber1 = Math.floor(Math.random() * 100);
    const randomNumber2 = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber1} ${operator} ${randomNumber2}`);
    const answer = readlineSync.question('What is the result of the expression?');
    console.log(`Your answer: ${answer}`);
    let expectedResult;
    switch (operator) {
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
    if (answer == expectedResult) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${expectedResult}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default generateAnswerCalc;
