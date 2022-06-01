const prompt = require('prompt-sync')({ sigint: true });

let answer = Math.ceil(Math.random() * 100);
console.log(answer);
let guess = Number(prompt("You have 3 chances to guess the number GO with your first!: "));
let count = 0;

while (count < 2 && guess !== answer) {
    count++;
    if (guess < answer) {
        console.log("Sorry, too low! Guess again loser!: ");
        guess = Number(prompt("> "));
    } else if (guess > answer) {
        console.log("Too High!!!! Try again..nerd.");
        guess = Number(prompt("> "));
        
    } 
}
if (count === 2){
    console.log("Sorry out of chances the number was : " + answer)
}
if (guess === answer) {
    console.log("Congrats!: " + answer);
}
