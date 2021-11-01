import {
  askName, askQuestion, isAnswerCorrect, printResponse,
} from '../index.js';

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const progression = (randomNumber, randomLenght, randomStep, hiddenNumber) => {
  const arr = [];
  let getRandom = randomNumber;
  for (let i = 0; i < randomLenght; i += 1) {
    if (i === 0) {
      arr.push(randomNumber);
    }
    if (i === hiddenNumber) {
      arr.push('..');
    } else {
      arr.push(getRandom + randomStep);
    }
    getRandom += randomStep;
  }
  return arr;
};

const guessRandomNumber = () => {
  const name = askName();
  const round = 3;
  for (let i = 0; i < round; i += 1) {
    const randomNumber = Math.floor(Math.random() * 10);
    const randomStep = Math.floor(getRandomArbitrary(1, Math.random() * 10));
    const randomLenght = Math.floor(getRandomArbitrary(5, 11));
    const hiddenNumber = Math.floor(getRandomArbitrary(0, randomLenght - 1));
    const callArray = progression(randomNumber, randomLenght, randomStep, hiddenNumber);
    const answer = askQuestion(`Question: ${callArray.join(' ')}`, 'What number is missing in the progression?');
    const expectedAnswer = callArray[hiddenNumber + 2] - randomStep;
    printResponse(name, expectedAnswer, answer, i);
    if (!isAnswerCorrect(expectedAnswer, answer)) {
      return;
    }
  }
};
export default guessRandomNumber;
