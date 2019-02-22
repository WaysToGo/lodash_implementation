Array.prototype.dropRightWhile = function(predicate) {
  let newArray = [];
  for (let i = this.length - 1; i >= 0; i--) {
    if (!predicate.apply(this, [this[i], i, this])) {
      newArray = this.slice(0, i + 1);
      break;
    }
  }
  return newArray;
};
