Array.prototype.intersection = function(array) {
  return this.filter((value, index) =>
    array.indexOf(value) > -1 ? true : false
  );
};
