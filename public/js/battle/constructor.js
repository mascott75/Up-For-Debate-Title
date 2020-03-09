export class Character {
  constructor(name, type, hp, attack, defense, speed) {
    this.name = name;
    this.type = type;
    this.hp = hp;
    this.atk = attack;
    this.defense = defense;
    this.speed = speed;
    this.hasBerry = true;
  }

  // method which determines whether or not a character's "hitpoints" are less then zero
  // and returns true or false depending upon the outcome
  isAlive() {
    if (this.hp <= 0) {
      console.log(`${this.name} has been defeated!`);
      return false;
    }
    return true;
  }

  // method which takes in a second object and decreases their "hitPoints" by this character's strength
  attack(opponent) {
    var critChance = Math.floor(Math.random() * 10);

    var attackValue = (this.atk * 20) / opponent.defense;

    if (critChance !== 0) {
      attackValue = (this.atk * 30) / opponent.defense;
      console.log(attackValue);

      switch (this.type) {
        case "Water":
          if (opponent.type === "Fire") {
            opponent.hp -= attackValue * 2;
            return `${this.name} hit ${opponent.name} for ${attackValue}, It's super effective! \n`;
          } else if (opponent.type === "Dragon") {
            opponent.hp -= attackValue * 0.5;
            return `${this.name} hit ${opponent.name} for ${attackValue *
              0.5}, It's not very effective \n`;
          } else {
            opponent.hp -= attackValue;
            return `${this.name} hit ${opponent.name} for ${attackValue} \n`;
          }
        case "Fire":
          if (opponent.type === "Grass") {
            opponent.hp -= attackValue * 2;
            return `${this.name} hit ${opponent.name} for ${attackValue}, It's super effective! \n`;
          } else if (opponent.type === "Dragon") {
            opponent.hp -= attackValue * 0.5;
            return `${this.name} hit ${opponent.name} for ${attackValue *
              0.5}, It's not very effective \n`;
          } else {
            opponent.hp -= attackValue;
            return `${this.name} hit ${opponent.name} for ${attackValue} \n`;
          }

        case "Grass":
          if (opponent.type === "Water") {
            opponent.hp -= attackValue * 2;
            return `${this.name} hit ${opponent.name} for ${attackValue}, It's super effective! \n`;
          } else if (opponent.type === "Dragon") {
            opponent.hp -= attackValue * 0.5;
            return `${this.name} hit ${opponent.name} for ${attackValue *
              0.5}, It's not very effective \n`;
          } else {
            opponent.hp -= attackValue;
            return `${this.name} hit ${opponent.name} for ${attackValue} \n`;
          }

        case "Dragon":
          opponent.hp -= attackValue;
          return `${this.name} hit ${opponent.name} for ${attackValue} \n`;
      }
    } else if (critChance === 0) {
      return `${this.name} attacked! \n ${opponent.name} avoided the attack! \n`;
    }
  }

  eatBerry() {
    if (this.hp <= 30 && this.hasBerry) {
      this.hp += 30;
      this.hasBerry = false;
    }
  }
}
