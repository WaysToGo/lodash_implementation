Array.prototype.head = function() {
  return this.length > 0 ? this.slice(0, 1)[0] : undefined;
};
