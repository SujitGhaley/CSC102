 //function to handle the user input of the word
        function checkPalindrome(event){
            //prevent the form from submitting
            event.preventDefault();

            // create a shortcut to the txtWord user input
            let userInput = document.getElementById("txtWord").value;

            //create shortcut to the output div
            let divPalinResults = document.getElementById("divPalinResults");


            // set up a variable to hold if the word is a palindrome or not
            let isPalin = isPalindrome(userInput);

            // this is equivalent to isPalin == true
            if (isPalin){
                divPalinResults.textContent = userInput + " is a palindrome.";
                divPalinResults.style.color = "rgb(0, 127, 40)"; // green text color

            }
            // this is equivalent to isPalin == false, not a palindrome
            else{
                divPalinResults.textContent = userInput + " is not a palindrome.";
                divPalinResults.style.color = "rgb(255, 0, 0)"; // red text color
            }
        }

        //function to check if the string is a palindrome
        function isPalindrome(stringToTest) {
            // convert the string to test to lower case because it is a better user experience
            stringToTest = stringToTest.toLowerCase();

            // set up a variable to reverse the contents of and set it to the original string
            let stringToReverse = stringToTest;

            // convert the string to an array so each string is in its own slot "iea" becomes ["i", "e", "a"]
            //reverse the contents of our new array, so now we have :"a" "e" "i"...
            //then join the array back into a string "aei"
            stringToReverse = stringToReverse.split("").reverse().join("");

            // compare the original string with the reversed string
            // you can either use == or ===
            if (stringToTest == stringToReverse){
                // return true to the calling code
                return true;

            }
            // as a default, return false
            return false;
        }

        //console.log("radar=" + isPalindrome("radar"));
       // console.log("test=" + isPalindrome("test"));
       // console.log("Mom=" + isPalindrome("Mom"));

        // this is testing Mom == moM - JS is case sensitive, so these values do not match
