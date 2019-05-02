
function Weather() {
  this.stormChance = Math.random();
};

Weather.prototype.isStorm = function() {
  return this.stormChance > 0.7;
};
