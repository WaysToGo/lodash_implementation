Array.prototype.formPairs = function() {
  let obj = {};
  this.forEach(a => {
    if (a && a.length == 2) {
      obj[a[0]] = a[1];
    } else throw "length grater then 2 cannot form pairs";
  });
  return obj;
};
