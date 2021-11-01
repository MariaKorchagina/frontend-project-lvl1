import {
  askName, askQuestion, isAnswerCorrect, printResponse,
} from '../index.js';

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
    const answer = askQuestion(`Question: ${randomNumber}`, 'Answer "yes" if given number is prime. Otherwise answer "no".');
    const isPrimeNumber = isPrime(randomNumber);
    const expectedAnswer = isPrimeNumber ? 'yes' : 'no';
    printResponse(name, expectedAnswer, answer, i);
    if (!isAnswerCorrect(expectedAnswer, answer)) {
      return;
    }
  }
};
export default getPrimeNumber;
