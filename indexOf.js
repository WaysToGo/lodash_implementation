Array.prototype.indexOf = function(value, fromIndex) {
  fromIndex = fromIndex || 0;

  for (let i = fromIndex; i < this.length; i++) {
    if (this[i] === value) {
      return i;
    }
  }
  return -1;
};
