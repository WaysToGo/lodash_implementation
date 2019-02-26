Array.prototype.pull = function(...args) {
  args.forEach(element => {
    let index = this.indexOf(element);
    if (index > -1) {
      this.splice(index, 1);
      this.pull(...args);
    }
  });
  return this;
};
