Array.prototype.reverse = function() {
  for (let i = 0; i < this.length / 2; i++) {
    let j = this.length - 1 - i;
    [this[i], this[j]] = [this[j], this[i]];

    //another way
    // let temp = this[i];
    // this[i] = this[this.length -i];
    // this[this.length - i] = temp;
  }
  return this;
};
