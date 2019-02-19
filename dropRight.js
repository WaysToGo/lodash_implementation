Array.prototype.dropRight = function(value) {
  value = value || 1;
  value = this.length - value;
  return this.slice(0, value < 0 ? 0 : value);
};
