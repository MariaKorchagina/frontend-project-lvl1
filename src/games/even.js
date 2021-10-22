/* eslint linebreak-style: ["error", "windows"] */
import readlineSync from 'readline-sync';
import askName from '../index.js';

const generateAnswer = () => {
  const name = askName();
  const round = 3;
  for (let i = 0; i < round; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber} `);
    const answer = readlineSync.question('Answer "yes" if the number is even, otherwise answer "no".');
    console.log(`Your answer: ${answer}`);
    const isEven = randomNumber % 2 === 0;
    if (isEven) {
      if (answer === 'yes') {
        console.log('Correct!');
        if (i === 2) {
          console.log(`Congratulations, ${name}!`);
        }
      } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was 'yes'.`);
        console.log(`Let's try again,${name}!`);
        return;
      }
    }
    if (!isEven) {
      if (answer === 'no') {
        console.log('Correct!');
        if (i === 2) {
          console.log(`Congratulations, ${name}!`);
        }
      } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was 'no'.`);
        console.log(`Let's try again,${name}!`);
        return;
      }
    }
  }
};
export default generateAnswer;
