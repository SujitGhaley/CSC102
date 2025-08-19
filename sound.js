// Sujit Ghaley 8/16/2025
// TODO Move this to JS file
    //function to add an audio elemetn to the page and sghaow the buttions dor play and pause.
    function addSound() {
        //shortcut to play button
        let btnPlay = document.getElementById("btnPlay");
        //shortcuyt to pause button
        let btnPause = document.getElementById("btnPause");

        //shortcut to add sound button
        let btnAddSound = document.getElementById("btnAddSound");

        //create an audio element
        let audWaves = document.createElement("audio");

        //give the audio element an id
        audWaves.setAttribute("id", "audWaves");

        // add the controls atrribute so we can see the audio elements on the page
        //this attribute is optional 
        //audWaves.setAttribute("controls", "controls");

        // set up the source for the audio file
        audWaves.setAttribute("src", "us-lab-background.mp3");

        //add the audio element to the web page
        document.body.appendChild(audWaves);

        //unhide btnPlay
        btnPlay.hidden = false;

        //unhide btnPause
        btnPause.hidden = false;

        //disable btnPause
        btnPause.disabled = true;

        //hide btnAddSound
        btnAddSound.hidden = true;
    }

    //function to start playing the sound
    function playSound() {
        //shortcut to audio element that we created
        let audio = document.getElementById("audWaves");

        //play the audio
        audio.play();

          //call the function instead to disable/enable buttons
        manageButtons(true, false);


    }

    //function to pause the playing sound
    function pauseSound() {
        //shortcut to audio element that we created
        let audio = document.getElementById("audWaves");

        //pause the audio
        audio.pause();

        //call the function instead to disable/enable buttons
        manageButtons(false, true);


    }

    // function to manage the buttons
    function manageButtons(disablePlay, disablePause) {
        //shortcut to play button
        let btnPlay = document.getElementById("btnPlay");
        //shortcuyt to pause button
        let btnPause = document.getElementById("btnPause");

        //disable btnPlay
        btnPlay.disabled = disablePlay;

        //enable btnPause
        btnPause.disabled = disablePause;

    }