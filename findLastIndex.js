Array.prototype.findLastIndex = function(predicate) {
  for (let i = this.length - 1; i >= 0; i--) {
    if (predicate.apply(this, [this[i], i, this])) {
      return i;
      break;
    }
  }
  return -1;
};
