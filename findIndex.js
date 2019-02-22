Array.prototype.findIndex = function(predicate) {
  for (let i = 0; i < this.length; i++) {
    if (predicate.apply(this, [this[i], i, this])) {
      return i;
      break;
    }
  }
  return -1;
};
