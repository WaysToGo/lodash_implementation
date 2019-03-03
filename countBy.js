Array.prototype.countBy = function(iteratee) {
  let obj = {};
  this.forEach(element => {
    let value = iteratee(element);
    if (obj[value] == undefined) {
      obj[value] = 1;
    } else {
      obj[value]++;
    }
  });
  return obj;
};
