import readlineSync from 'readline-sync';

export const askName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};


export const askQuestion = (question, askAnswer) => {
  console.log(question);
  const answer = readlineSync.question(askAnswer);
  console.log(`Your answer: ${answer}`);
  return answer;
};

export const isAnswerCorrect = (expected, userAnswer) => String(expected) === String(userAnswer);

export const printResponse = (name, expectedAnswer, userAnswer, round) => {
  if (isAnswerCorrect(expectedAnswer, userAnswer)) {
    console.log('Correct!');
    if (round === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  } else {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${expectedAnswer}.`);
    console.log(`Let's try again, ${name}!`);
  }
};
