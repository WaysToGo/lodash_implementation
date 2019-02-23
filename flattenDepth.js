Array.prototype.flattenDepth = function(depth) {
  depth = depth || 1;
  return this.reduce((acc, value) => {
    if (Array.isArray(value) && depth > 1) {
      return acc.concat(value.flattenDepth(depth - 1));
    } else {
      return acc.concat(value);
    }
  }, []);
};
