Array.prototype.dropWhile = function(predicate) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (!predicate.apply(this, [this[i], i, this])) {
      newArray = this.slice(i, this.length + 1);
      break;
    }
  }
  return newArray;
};
