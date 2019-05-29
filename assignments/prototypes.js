/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function GameObject(attributes) {
  this.createdAt = attributes.createdAt;
  this.name = attributes.name;
  this.dimensions = attributes.dimensions;
};

GameObject.prototype.destroy = function () {
  return `${this.name} was removed from the game.`;
};

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(characterAttr) {
  GameObject.call(this, characterAttr);
  this.healthPoints = characterAttr.healthPoints;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function () {
  return `${this.name} took damage`;
};

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(humanoidAttr) {
  CharacterStats.call(this, humanoidAttr);
  this.team = humanoidAttr.team;
  this.weapons = humanoidAttr.weapons;
  this.language = humanoidAttr.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}.`
}

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


// Stretch task: 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

function Villain(villainAttr) {
  Humanoid.call(this, villainAttr);
}

Villain.prototype = Object.create(Humanoid.prototype);

Villain.prototype.attack = function () {
  return `${this.name} strikes at our Hero with his ${this.weapons[Math.floor((Math.random() * 10) + 1) % 2]}`;
}

Villain.prototype.attackStrength = function() {
  return Math.floor((Math.random() * 10) + 1);
}

Villain.prototype.dodge = function () {
  return `Oh no! Our Hero ${villageIdiot.name} has missed!`;
}

Villain.prototype.getsHit = function () {
  return `Score one for the good guys!`;
}

function Hero(heroAttr) {
  Humanoid.call(this, heroAttr);
}

Hero.prototype.attack = function () {
  return `${this.name} strikes at the dark one with his ${this.weapons[Math.floor((Math.random() * 10) + 1) % 2]}`;
}

Hero.prototype.attackStrength = function() {
  return Math.floor((Math.random() * 10) + 1);
}

Hero.prototype.dodge = function () {
  return `${this.name} is too quick!`;
}

Hero.prototype.getsHit = function () {
  return `${nemisis.name} will pay for that!`;
}

const nemisis = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Necronomicon',
  team: 'The Upside Down',
  weapons: [
    'Sharp Words',
    'Foul Breath',
  ],
  language: 'Gibberish',
});

const villageIdiot = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Bruce Campbell',
  team: "'Murica",
  weapons: [
    'Boomstick',
    'Chainsaw',
  ],
  language: "'Murican",
});

function toTheDeath(player1, player2) {
  let p1Health = 100;
  let p2Health = 100;
  let p1Attack;
  let p2Attack;
  let victor = player1;
  let defeated = player2;
  let outcome = `${victor.name} has carried the day for ${victor.team} and sent ${defeated.name} wimpering back to ${defeated.team}.`
  let p1 = player1;
  let p2 = player2

  console.log(`${player2.name}: You will never defeat me ${player1.name}!`);
  console.log(`${player1.name}: Oh yeah? I won't even break a sweat.`)
  console.log(`${player1.name} Health: ${p1Health}`)
  console.log(`${player2.name} Health: ${p2Health}`)

    const fight = function() {

    while (p1Health > 0 && p2Health > 0) {
      p1Attack = p1.attackStrength();
      console.log(p1.attack());
      
      if (p1Attack % 2 === 0) {
        console.log(p2.getsHit());
        console.log(`${p2.name} Health: -${p1Attack}`)
        p2Health -= p1Attack;
      }
      else {
        console.log(p2.dodge());
      }

      p2Attack = p2.attackStrength();
      console.log(p2.attack());

      if (p2Attack % 2 !== 0) {
        console.log(p1.getsHit());
        console.log(`${p1.name} Health: -${p2Attack}`)
        p1Health -= p2;
      }
      else {
        console.log(p1.dodge());
      }
    }

    if (p2Health > p1Health) {
        victor = p2;
        defeated = p1;
      }
    }

  fight();

  console.log(outcome);
};

toTheDeath(villageIdiot, nemisis);
