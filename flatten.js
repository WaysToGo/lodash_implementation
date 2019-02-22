Array.prototype.flatten = function() {
  return this.reduce((a, val) => {
    a.concat(val);
  });
};
//or [].concat[...arr]
