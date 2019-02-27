Array.prototype.takeRight = function(n = -1) {
  if (n == 0) return [];
  return this.slice(n > 0 ? -n : n);
};
