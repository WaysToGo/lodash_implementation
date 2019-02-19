Array.prototype.drop = function(value) {
  value = value || 1;
  return this.slice(value);
};
