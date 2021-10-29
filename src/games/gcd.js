import readlineSync from 'readline-sync';
import askName from '../index.js';

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
    console.log(`Question: ${randomNumber1} ${randomNumber2}`);
    const answer = readlineSync.question('Find the greatest common divisor of given numbers.');
    console.log(`Your answer: ${answer}`);
    const expectedResult = NOD(randomNumber1, randomNumber2);
    if (answer === String(expectedResult)) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${expectedResult}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
};
export default biggestDivisor;
