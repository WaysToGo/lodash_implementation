Array.prototype.flattenDeep = function() {
  return this.reduce(
    (acc, value) =>
      Array.isArray(value)
        ? acc.concat(value.flattenDepth())
        : acc.concat(value),
    []
  );
};
