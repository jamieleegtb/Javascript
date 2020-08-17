
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
      // After post the project I'll focus on fetching the JSON data
      const triceratops = new Dino(
        "Triceratops",
        13000,
        114,
        "herbavor",
        "North America",
        "Late Cretaceous",
        "First discovered in 1889 by Othniel Charles Marsh"
      );

      const tyrannosaurus = new Dino(
        "Tyrannosaurus Rex",
        11905,
        144,
        "carnivor",
        "North America",
        "Late Cretaceous",
        "The largest known skull measures in at 5 feet long."
      );
      const anklyosaurus = new Dino(
        "Anklyosaurus",
        10500,
        55,
        "herbavor",
        "North America",
        "Late Cretaceous",
        "Anklyosaurus survived for approximately 135 million years."
      );
      const brachiosaurus = new Dino(
        "Brachiosaurus",
        70000,
        "372",
        "herbavor",
        "North America",
        "Late Jurasic",
        "An asteroid was named 9954 Brachiosaurus in 1991."
      );
      const stegosaurus = new Dino(
        "Stegosaurus",
        11600,
        79,
        "herbavor",
        "North America, Europe, Asia",
        "Late Jurasic to Early Cretaceous",
        "The Stegosaurus had between 17 and 22 seperate places and flat spines."
      );
      const elasmosaurus = new Dino(
        "Elasmosaurus",
        16000,
        59,
        "carnivor",
        "North America",
        "Late Cretaceous",
        "Elasmosaurus was a marine reptile first discovered in Kansas."
      );
      const pteranodon = new Dino(
        "Pteranodon",
        44,
        20,
        "carnivor",
        "North America",
        "Late Cretaceous",
        "Actually a flying reptile, the Pteranodon is not a dinosaur."
      );
      const pigeon = new Dino(
        "Pigeon",
        0.5,
        9,
        "herbavor",
        "World Wide",
        "Holocene",
        "All birds are living dinosaurs."
      );


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
