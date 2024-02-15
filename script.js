function playGame() {
  console.log("GAME ON");

  const minNum = 1;
  const maxNum = 100;
  const answer = Math.floor(Math.random() * maxNum + 1);
  let gameOn = true;
  let lives = 5;

  while (gameOn) {
    let guess = prompt(`guess the number between ${minNum} and ${maxNum}`);

    if (guess === answer) {
      console.log(`You got it right! the answer is ${answer}`);
      gameOn = false;
    } else if (guess < answer) {
      console.log(`you got it wrong. the answer is higher than ${guess}`);
      lives -= 1;
      console.log(` you have ${lives} lives remaining.`);

      if (lives === 0) {
        console.log("Game over.");
        console.log(`The answer was ${answer}`);
        gameOn = false;
      }
    } else {
      console.log(`you got it wrong. the answer is lower than ${guess}`);
      lives -= 1;
      console.log(` you have ${lives} lives remaining.`);

      if (lives === 0) {
        console.log("Game over.");
        console.log(`The answer was ${answer}`);
        gameOn = false;
      }
    }
  }
}

playGame();
