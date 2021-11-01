import {
  askName, askQuestion, isAnswerCorrect, printResponse,
} from '../index.js';

function NOD(x, y) {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
}
const biggestDivisor = () => {
  const name = askName();
  const round = 3;
  for (let i = 0; i < round; i += 1) {
    const randomNumber1 = Math.floor(Math.random() * 100);
    const randomNumber2 = Math.floor(Math.random() * 100);
    const answer = askQuestion(`Question: ${randomNumber1} ${randomNumber2} `, 'Find the greatest common divisor of given numbers.');
    const expectedResult = NOD(randomNumber1, randomNumber2);
    printResponse(name, expectedResult, answer, i);
    if (!isAnswerCorrect(expectedResult, answer)) {
      return;
    }
  }
};
export default biggestDivisor;
