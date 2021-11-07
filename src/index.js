import readlineSync from 'readline-sync';

const roundsCount = 3;

const startGame = (gameDescription, getgameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, expectedAnswer] = getgameData();
    console.log(question);
    const answer = readlineSync.question(gameDescription);
    console.log(`Your answer: ${answer}`);
    if (expectedAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${expectedAnswer}`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default startGame;
