
        //set up an array to hold player stats
        let arrPlayers = [
            { name: "Lionel Messi", goals: 30, assists: 10, matches: 25 },
            { name: "Cristiano Ronaldo", goals: 28, assists: 12, matches: 24 },
            { name: "Neymar Jr", goals: 25, assists: 8, matches: 22 },
            { name: "Sujit Ghaley", goals: 26, assists: 9, matches: 23 }
        ];

        // set up array to hold teams and their stats
        let arrTeams = [
            { name: "Barcelona", goals: 109, matches: 30, assists: 40 },
            { name: "Real Madrid", goals: 95, matches: 28, assists: 35 },
            { name: "Atletico Madrid", goals: 88, matches: 26, assists: 30 },
            { name: "Valencia", goals: 76, matches: 24, assists: 25 }
        ];

        // create a function to manage the stats
        function updatePlayerStats() {
            // Get the player name from the search input
            let playerName = document.getElementById("searchInput").value;
            // Logic to update player stats based on the search input
            console.log("Searching for player:", playerName);

            //new updated player stats
            let updatedStats = arrPlayers.find(player => player.name === playerName);
            // If player is found, update the stats
            if (updatedStats) {
                console.log("Player found:", updatedStats);

            // if not found displays player not found
            } else {
                console.log("Player not found");
            }

            //update player stats display
            let playerStatsDiv = document.getElementById("playerStats");
            // Clear previous stats
            playerStatsDiv.innerHTML = "";
            // Display updated stats if player is found
            if (updatedStats) {
                playerStatsDiv.innerHTML = `
                    <p>Name: ${updatedStats.name}</p>
                    <p>Goals: ${updatedStats.goals}</p>
                    <p>Assists: ${updatedStats.assists}</p>
                    <p>Matches: ${updatedStats.matches}</p>
                `;
            // If player is not found, display a message
            } else {
                playerStatsDiv.innerHTML = "<p>Player not found</p>";
            }


        }


