Array.prototype.intersection = function(array) {
  return this.filter(value => array.indexOf(value) > 0);
};
