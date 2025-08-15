//Create a function to validate the form inputs
    function validateForm(){
        //create a shortcut/nickname for the First name that the user enbtered
        let firstName = document.getElementById("txtFirstName").value;

        //create a shortcut/nickname for the Last name that the user enbtered
        let lastName = document.getElementById("txtLastName").value;

        //create a shortcut/nickname for the Zip code that the user enbtered
        let zipCode = document.getElementById("txtZip").value;

        console.log("firstName: " + firstName);
        console.log("lastName: " + lastName);
        console.log("zipCode: " + zipCode);

        // Create a new variable to hold both first and last name
        let fullName = firstName + " " + lastName;

        console.log("fullName=" + fullName);

        // create a shortcut to the message area
        let divMessage = document.getElementById("divMessage");

        //Create an error message if the full name has 1 character or more than 10 characters
        // for the asignment change 10 to 20
        if(fullName.length == 1 || fullName.length > 20){
            //the user gets notified of the error but does not get the secret message
            divMessage.innerHTML = "Invalid name entered. Please try again.";
            divMessage.style.color = "red";

        }
        // if the zip code is not exactly 5 digits long give the user an error message 
        else if (zipCode.length != 5){
            //the user gets notified of the error but does not get the secret message
            divMessage.innerHTML = "Invalid zip code entered. Please try again.";
            divMessage.style.color = "red";
        }
        //if we get to this else statment, it means all of the inputs validated succesfully! Give the user a secret message
        else{
            // the inputs validated successfully, so now we can give the user the secret message
            divMessage.innerHTML = "Congratulations, " + fullName + "! The secret message is: You're Amazing!";
            divMessage.style.color = "green";
        }



    // this will prevent the form from trying to submit to server side code that we don't have in this class
    return false;
}

// <img id="memeImage" src="programming-meme-14.jpg" alt="Meme Image">
    //this variable will keep track of the current interval ID - we are storing this ID so that we can stop the image from moving
    let intervalID = 0;

    //create a function to generate a random number
    function getRandomNumber(){
        //get a random number, multiply it by 1000, round down the number, and return it
        return Math.floor(Math.random() * 800);
    } 

    // This function will start the image moving around the page
    function startMove() {
        //create a shortcut to the meme image
        let imgMeme = document.getElementById("memeImage");

        intervalID = setInterval(function(){
            //create variables to give a new location for the image
            let newTop = getRandomNumber();
            let newLeft = getRandomNumber();

            //we are changing the css property for the image - changing from left & top 25%
            imgMeme.style.left = newLeft + "px";
            imgMeme.style.top = newTop + "px";

            console.log("left=" + newLeft + "px");
            console.log("top=" + newTop + "px");
        }, 1000); // 1000 is in milliseconds - 1000 milliseconds = 1 second

        //set it up so that we cannot click on the start button
        document.getElementById("btnStart").disabled = true;
        //set it up so that we cannot click on the stop button
        document.getElementById("btnStop").disabled = false;


    }

    // function to stop the image from moving
    function stopMove(){
        //call the built in javascript function to stop the runnning code that we started running in setInterval
        clearInterval(intervalID);

        //set it up so that we cannot click on the start button
        document.getElementById("btnStart").disabled = false;
        //set it up so that we cannot click on the stop button
        document.getElementById("btnStop").disabled = true;

    }