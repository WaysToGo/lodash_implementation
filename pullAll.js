Array.prototype.pullAll = function(args) {
  args.forEach(element => {
    let index = this.indexOf(element);
    if (index > -1) {
      this.splice(index, 1);
      this.pullAll(args);
    }
  });
  return this;
};
