Array.prototype.union = function(array = []) {
  let newArray = this.slice();
  array.forEach(element => {
    if (this.indexOf(element) < 0) newArray.push(element);
  });
  return newArray;
};
