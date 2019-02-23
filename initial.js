Array.prototype.initial = function() {
  return this.length > 0 ? this.slice(0, this.length - 1) : [];
};
