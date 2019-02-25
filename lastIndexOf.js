Array.prototype.lastIndexOf = function(value) {
  for (let i = this.length - 1; i >= 0; i--) {
    if (this[i] == value) {
      return i;
      break;
    }
  }
  return -1;
};
