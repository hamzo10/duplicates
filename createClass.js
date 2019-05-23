function Hero (name, level) {
    this.name = name;
    this.level = level;
}

var hero1 = new Hero('Hamzah', 1);

Hero.prototype.greet = function () {
    return `${this.name} says hello`
}

console.log(hero1);
hero1.greet()

function Warrior (name, level, weapon) {
    Hero.call(this, name, level);
    this.weapon = weapon;
}

function Healer (name, level, weapon) {
    Hero.call(this, name, level);
    this.spell = spell;
}

Warrior.prototype.attack = function () {
    return `${this.name} attacks with ${this.weapon}`;
}

Healer.prototype.heal = function () {
    return `${this.name} casts ${this.spell}`;
}

const 