Array.prototype.every = function() {
  for (let i = 0; i < this.length; i++) {
    if (this[i]) {
    } else {
      return false;
      break;
    }
  }
  return true;
};
