function Hero (name, level) {
    this.name = name;
    this.level = level;
}



Hero.prototype.greet = function () {
    return `${this.name} says hello`
}

// inc = function () {
//     if(!this.counter){
//         this.counter = 0
//     }
//     this.counter ++;
//     console.log(this.counter)
// }

Hero.prototype.inc = function () {
    if(Hero.prototype.counter=== undefined){
        Hero.prototype.counter = 0
    }
    Hero.prototype.counter ++;
    return Hero.prototype.counter
    
}
/* console.log(hero1);
hero1.greet() */

// function Warrior (name, level, weapon) {
//     Hero.call(this, name, level);
//     this.weapon = weapon;
// }

// function Healer (name, level, spell) {
//     Hero.call(this, name, level);
//     this.spell = spell;
// }

// Warrior.prototype.attack = function () {
//     return `${this.name} attacks with ${this.weapon}`;
// }

// Healer.prototype.heal = function () {
//     return `${this.name} casts ${this.spell}`;
// }

// const hero1 = new Warrior('Bjorn', 1, 'axe');
// const hero2 = new Healer ('Jack', 1, 'cure');

