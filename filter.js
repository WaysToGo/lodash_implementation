Array.prototype.filter = function(iteratee) {
  let array = [];
  this.forEach(element => {
    if (iteratee(element)) {
      array.push(element);
    }
  });
  return array;
};
