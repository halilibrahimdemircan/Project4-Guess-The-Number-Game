let message1 = document.getElementById("msg1");
let message2 = document.getElementById("msg2");
let message3 = document.getElementById("msg3");
let message4 = document.getElementById("msg4");


let answer = Math.floor(Math.random()*100 + 1)
let number_of_guesses = 0 ;
let guessed_nums = [];

const play = () => {
    let user_guess = document.getElementById("guess").value;

    if(user_guess < 0 || user_guess > 100){
        alert("Please enter a number between 0 and 100");

    }
    else{
        guessed_nums.push( " " + user_guess);
        number_of_guesses += 1 ;

        if(user_guess < answer){
            message1.textContent = "Your guess is lower than answer.";
            message2.textContent = "Number of guesses: " + number_of_guesses;
            message3.textContent = "Guessed numbers are: " + guessed_nums;
        }
        else if(user_guess > answer){
            message1.textContent = "Your guess is higher than answer.";
            message2.textContent = "Number of guesses: " + number_of_guesses;
            message3.textContent = "Guessed numbers are: " + guessed_nums;
        }
        else if(user_guess == answer){
            message1.textContent = "Bildin evlat!";
            message2.textContent = "The number was"+ answer;
            message3.textContent = `You guessed it in ${number_of_guesses} times` ;
            message4.textContent = "Guessed numbers are: " + guessed_nums;

        }

    };
    console.log(user_guess)
    user_guess = 0;

};
