import readlineSync from 'readline-sync';

const round = 3;

const startGame = (gameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  for (let i = 0; i < round; i += 1) {
    const [question, expectedAnswer] = gameData();
    const answer = readlineSync.question(question);
    console.log(`Your answer: ${answer}`);

    if (String(expectedAnswer) === String(answer)) {
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
