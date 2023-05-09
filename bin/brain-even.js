import readlineSync from 'readline-sync';
import {
    getName,
    name
} from './src/cli.js';

getNumberGame();

function getNumberGame() {
    console.log('Welcome to the Brain Games!');
    getName();
    console.log(`Answer "yes" if the number is even, otherwise answer "no".`);
    const max = 100;
    let coranswer = 0;
    while (coranswer != 3) {
        let num = Math.floor(Math.random() * max);
        console.log(`Question: ${num}`);
        let answer = readlineSync.question('Answer: ');
        if (num % 2 != 0 && answer == "yes") {
            return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.`);
        } else if ((num % 2 == 0 && answer == "yes") || (num % 2 != 0 && answer == "no")) {
            console.log(`Correct!`);
            coranswer++
        }

    }
    console.log(`Congratulations, ${name}`);
}