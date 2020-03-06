var textarea = $("#textarea")

class Character {
    constructor(name, type, hp, attack, defense, speed) {
      this.name = name;
      this.type = type;
      this.hp = hp;
      this.attack = attack;
      this.defense = defense;
      this.speed = speed;
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
      var critChance = Math.floor(Math.random()*10)
      
      var attackValue = ((this.attack * 20) / opponent.defense)
      
      if (critChance !== 0){
        attackValue = ((this.attack * 30) / opponent.defense)

        switch (this.type) {
            case water:
                if(opponent.type === fire){
                    textArea.textContent += (`${this.name} hit ${opponent.name} for ${attackValue}, It's super effective! \n`);
                    opponent.hp -= (attackValue * 2);
                }
                else if (opponent.type === dragon){
                    textArea.textContent += (`${this.name} hit ${opponent.name} for ${attackValue * .5}, It's not very effective \n`);
                    opponent.hp -= (attackValue * .5);
                }   
                else{
                    textArea.textContent += (`${this.name} hit ${opponent.name} for ${attackValue} \n`);
                    opponent.hp -= (attackValue);
                }
            break;
            case fire:
                if(opponent.type === grass){
                    textArea.textContent += (`${this.name} hit ${opponent.name} for ${attackValue}, It's super effective! \n`);
                    opponent.hp -= (attackValue * 2);
                }
                else if (opponent.type === dragon){
                    textArea.textContent += (`${this.name} hit ${opponent.name} for ${attackValue * .5}, It's not very effective \n`);
                    opponent.hp -= (attackValue * .5);
                }   
                else{
                    textArea.textContent += (`${this.name} hit ${opponent.name} for ${attackValue} \n`);
                    opponent.hp -= (attackValue);
                }
            break;
            case grass:
                if(opponent.type === water){
                   textArea.textContent += (`${this.name} hit ${opponent.name} for ${attackValue}, It's super effective! \n`);
                    opponent.hp -= (attackValue * 2);
                }
                else if (opponent.type === dragon){
                   textArea.textContent += (`${this.name} hit ${opponent.name} for ${attackValue * .5}, It's not very effective \n`);
                    opponent.hp -= (attackValue * .5);
                }   
                else{
                   textArea.textContent += (`${this.name} hit ${opponent.name} for ${attackValue} \n`);
                    opponent.hp -= (attackValue);
                }
            break;
            case dragon:     
                   textArea.textContent += (`${this.name} hit ${opponent.name} for ${attackValue} \n`);
                    opponent.hp -= (attackValue);
               
                }
      }     
               else if(critChance === 0){
                    textArea.textContent += `${this.name} attacked! \n ${opponent.name} avoided the attack! \n` 
                  }
     
    }
}
