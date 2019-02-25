Array.prototype.intersectionBy = function(value, iteratee) {
  let array = this.map(a => iteratee(a));
  value = value.map(a => iteratee(a));
  return array.filter(a => {
    return value.indexOf(a) > 0;
  });
};
