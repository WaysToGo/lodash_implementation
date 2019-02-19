Array.prototype.difference = function(value) {
  let array = this;
  return array.filter(a => {
    return value.indexOf(a) < 0;
  });
};
