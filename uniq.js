Array.prototype.uniq = function() {
  let array = [];

  for (let i = this.length; i >= 0; i--) {
    if (this.indexOf(this[i]) == i) {
      array.push(this[i]);
    }
  }
  return array.reverse();
};
