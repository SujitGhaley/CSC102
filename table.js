let arrProblems = [
        ["Lionel Messi", 30, 10, 25],
        ["Cristiano Ronaldo", 28, 12, 24],
        ["Neymar Jr", 25, 8, 22],
        ["Sujit Ghaley", 26, 9, 23]
        ];

        // for loop to loop through the rows
        for (let i=0; i<arrProblems.length; i++) {
            //create a tr tag
            let tr = document.createElement("tr");

            for (let j=0; j<arrProblems[i].length; j++){
                // create a td tag for each piece of data in the row/ array
                let td = document.createElement("td");
                
                // set the data from row i and column j to the td that we just created
                td.textContent = arrProblems[i][j];

                // add the td to the tr
                tr.appendChild(td);
            }

            // add the row to the table
            document.getElementById("tblData").appendChild(tr);
        }