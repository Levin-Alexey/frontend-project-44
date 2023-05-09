import readlineSync from 'readline-sync';


let name = '';
export default function getName() {
    name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
}

export {
    getName,
    name
};