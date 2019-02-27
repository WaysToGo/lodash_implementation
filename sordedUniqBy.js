Array.prototype.sortedUniqBy = function(fun) {
  let array = [];
  let arrayCopy = this.map(a => fun(a));
  for (let i = arrayCopy.length; i >= 0; i--) {
    if (arrayCopy.indexOf(arrayCopy[i]) == i) {
      array.push(this[i]);
    }
  }
  return array.reverse();
};
