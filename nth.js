Array.prototype.nth = function(index) {
  index = index || 0;
  return index >= 0 ? this[index] : this[this.length + index];
};
