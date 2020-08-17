      document.body.onload = generateDinos;

      // Create Dino Constructor
      function Dino({species, weight, height, diet, where, when, fact, image}) {
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = fact;
      }

      // Create Dino Objects

      // Fetch Dino from dino.json file
      let dinos = [];

       async function generateDinos(){
         const myJson = await fetch("dino.json");
         const data = await myJson.json();

         // Generate Dino objects array
         dinos = data.Dinos.map(dino => new Dino(dino));
       }

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
              <img src="${dino.species}.png" alt="${dino.species}" />
              <p>${dino.facts}</p>
            </div>
          `;
        }
      };



      // Remove form from screen
      function removeForm() {
        const form = document.getElementById('dino-compare');
        form.innerHTML = '';
      }
