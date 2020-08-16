      //Fetching data from JSON file
      fetch("dino.json")
        .then(response => response.json())
        .then(dino => console.log(JSON.stringify(dino)));


      // Create Dino Constructor
      function Dino(species, weight, height, diet, where, when, fact) {
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = fact;
      }

      // Create Dino Objects
      const


      // Create Human Object
      let human = {};

      // Use IIFE to get human data from form
      document.querySelector("#btn").addEventListener('click', e => {
        human = (function() {
            return {
                name: document.getElementById('name').value,
                heightFeet: parseInt(document.getElementById('feet').value),
                heightInches: parseInt(document.getElementById('inches').value),
                weight: parseInt(document.getElementById('weight').value),
                diet: document.getElementById('diet').value
            }
        })();
        //console.log(human);
      });

      // Create Dino Compare Method 1
      // NOTE: Weight in JSON file is in lbs, height in inches.


      // Create Dino Compare Method 2
      // NOTE: Weight in JSON file is in lbs, height in inches.


      // Create Dino Compare Method 3
      // NOTE: Weight in JSON file is in lbs, height in inches.




      // Generate Tiles for each Dino in Array


            // Add tiles to DOM

      // Remove form from screen


// On button click, prepare and display infographic
