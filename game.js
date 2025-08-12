//single line comment
        /* This is a multi-line comment
           It can span multiple lines
           and is useful for longer explanations */
        // This function will allow us to start the game
        function startGame() {
            //you can display helpful messages to the console to track what's going on in the program
            console.log("startGame function called!");

            let die1 = rollDie(); // Call the rollDie function to get a random number for die1

            console.log("die1=" + die1);

            // create a variable that holds a shortcut/nickname for die roll
            let divDie1 = document.getElementById("divDie1"); // Get the div element to display the die roll

            // create a variable that holds a shortcut/nickname for game result
            let divResult = document.getElementById("divResult"); // Get the div element to display the game result

            // change the text in the HTML elements
            divDie1.textContent = "You have rolled: " + die1; // Update the die roll display

            // if die1 is 7 or 10, you win
            // make sure to use == for equality
            // and not = which will change the value of die1
            // || means "or" && means "and"
            if (die1 == 7 || die1 == 10) {
                //display a message to the user that they won
                console.log("You win! :D");

                
            divResult.textContent = "You win! :D"; // Update the game result display to show win message
            }

           // if die1 is not 10, you lose
            // make sure to use != for inequality
            else if (die1 != 10) {
                //display a message to the user that they lost
                console.log("You lose! Try again! :(");

                divResult.textContent = "You lose! Try again! :("; // Update the game result display to show lose message
            }

            // if die1 is not 7, you lose
            else if (die1 != 7) {
                //display a message to the user that they lost
                console.log("You lose! Try again! :(");

                divResult.textContent = "You lose! Try again! :("; // Update the game result display to show lose message
            }

        }

        // This function will allow us to simulate the roling of a 10 sided die
        function rollDie() {
            let randomNumber = Math.random() * 10; // Generate a random number between 0 and 9
            
            // Round down to the nearest whole number and add 1 to get a number between 1 and 10
            randomNumber = Math.ceil(randomNumber);

            //return the random number
            return randomNumber;
        }