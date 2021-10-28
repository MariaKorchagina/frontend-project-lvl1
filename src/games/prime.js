/* eslint linebreak-style: ["error", "windows"] */
import readlineSync from 'readline-sync';
import askName from '../index.js';

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) return false;
  }
  return true;
}

const getPrimeNumber = () => {
  const name = askName();
  const round = 3;
  for (let i = 0; i < round; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Answer "yes" if given number is prime. Otherwise answer "no".');
    console.log(`Your answer: ${answer}`);
    const isPrimeNumber = isPrime(randomNumber);
    if (isPrimeNumber) {
      if (answer === 'yes') {
        console.log('Correct!');
        if (i == 2) {
          console.log(`Congratulations, ${name}!`);
        }
      } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was 'yes'.`);
        console.log(`Let's try again,${name}!`);
        return;
      }
    }
    if (!isPrimeNumber) {
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
export default getPrimeNumber;
