// Soldier
function Soldier(health, strength) {
this.health = health;
this.strength = strength;

this.attack = function (){
return  this.strength;
}
this.receiveDamage = function(damage){
 this.health = health-damage;
}
}
// Viking
function Viking(name,health,strength) {
Soldier.call(this,health,strength);
this.name = name;
this.receiveDamage = function(damage){
  this.health = health-damage;
  if (health-damage > 0){
    return `${name} has received ${damage} points of damage`
  }
  else {return `${name} has died in act of combat`}
}
this.battleCry = function(){
  return "Odin Owns You All!"
}
}
// Saxon
function Saxon(health,strength) {
    Soldier.call(this,health,strength);
  this.receiveDamage = function(damage){
    this.health = health-damage;
      if (health-damage > 0){
        return `A Saxon has received ${damage} points of damage`
      }
      else {return `A Saxon has died in combat`}
    }

}

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
  this.addViking = (Viking => { this.vikingArmy.push(Viking)});
  this.addSaxon = (Saxon => { this.saxonArmy.push(Saxon)});
  this.vikingAttack = function(){
    Saxon.receiveDamage = Viking.strength;
    return Saxon.receiveDamage(Viking.strength)
  }
  this.saxonAttack = function(){}
  this.showStatus = function(){}
}




Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;