
function Airport() {
  this.weather = new Weather
};

Airport.prototype.land = function(plane) {
  if (this.weather.isStorm()) {
    throw new Error('too stormy to land');
  }
  return plane
};

Airport.prototype.takeOff = function(plane) {
  if (this.weather.isStorm()) {
    throw new Error('too stormy to take off');
  }
  return plane
};
