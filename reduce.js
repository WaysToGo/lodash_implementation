Array.prototype.reduce = function(predicate, accumulator) {
  accumulator = accumulator || 0;
  for (let i = 0; i < this.length; i++) {
    accumulator = predicate.apply(this, [accumulator, this[i], i, this]);
  }
  return accumulator;
};
