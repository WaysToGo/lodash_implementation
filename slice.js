Array.prototype.slice = function(start = 0, end = this.length) {
  let array = [];
  for (i = start; i < end; i++) {
    array.push(this[i]);
  }
  return array;
};
