

      // Create Dino Constructor
      function Dino(species, weight, height, diet, where, when, fact, image) {
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = fact;
      }

      // Create Dino Objects

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
        "All birds are living dinosaurs.",
      );

      // Dino array
      let dinos =  [ triceratops,
                     tyrannosaurus,
                     anklyosaurus,
                     brachiosaurus,
                     stegosaurus,
                     elasmosaurus,
                     pteranodon,
                     pigeon
                   ];



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

        // On click remove form from screen
        removeForm();
        // On button click, prepare and display infographic
        generateTiles();
      });

      // Create Dino Compare Method 1 - Weight
      // NOTE: Weight in JSON file is in lbs, height in inches.
      Dino.prototype.weight = function() {
        if (this.weight > human.weight) {
          return `${this.species} is heavier than you are!`;
        } else {
          return `You are not heavier than ${this.species}.`;
        }
      }


      // Create Dino Compare Method 2 - Height
      // NOTE: Weight in JSON file is in lbs, height in inches.
      Dino.prototype.height = function() {
        if (this.height > (human.feet*12 + human.inches)) {
          return `${this.species} is taller than you are!`;
        } else {
          return `You are not taller than ${this.species}.`;
        }
      }


      // Create Dino Compare Method 3 - Diet
      // NOTE: Weight in JSON file is in lbs, height in inches.
      Dino.prototype.diet = function() {
        if (this.diet === human.diet) {
          return `${this.species} and you are ${this.diet}.`;
        } else {
          return `${this.species} is a ${this.diet} and you are a ${human.diet}.`;
        }
      }


      // Generate Tiles for each Dino in Array
      function generateTiles (){
        const grid = document.querySelector("#grid");
        // Add tiles to DOM
        dinos.map(dino => {
          grid.innerHTML += `
            <div class="grid-item">
              <h3>${dino.species}</h3>
              <img src="./images/${dino.species.toLowerCase()}.png" alt="${dino.species}" />
              <p>${dino.fact}</p>
            </div>
          `;
        });

        // Get 4th dino
        const dinoFourth = document.getElementsByClassName("grid-item")[3];

        // Add Human Tile after the 4th dino
        dinoFourth.insertAdjacentHTML("afterend", `
          <div class="grid-item">
            <h3>${human.name}</h3>
            <img src="./images/human.png">
          </div>
        `);
      };



      // Remove form from screen
      function removeForm() {
        const form = document.getElementById('dino-compare');
        form.innerHTML = '';
      }
