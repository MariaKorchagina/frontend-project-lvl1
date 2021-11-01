import {
  askName, askQuestion, isAnswerCorrect, printResponse,
} from '../index.js';

const generateAnswer = () => {
  const name = askName();
  const round = 3;
  for (let i = 0; i < round; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    const answer = askQuestion(`Question: ${randomNumber} `, 'Answer "yes" if the number is even, otherwise answer "no".');
    const isEven = randomNumber % 2 === 0;
    const expectedAnswer = isEven ? 'yes' : 'no';
    printResponse(name, expectedAnswer, answer, i);
    if (!isAnswerCorrect(expectedAnswer, answer)) {
      return;
    }
  }
};
export default generateAnswer;
