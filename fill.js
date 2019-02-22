Array.prototype.fill = function(toFill, start, end) {
  start = start || null;
  end = end || null;

  if (start && !end) {
    this[start] = toFill;
  } else if (start && end) {
    for (let i = start; i < end; i++) {
      this[i] = toFill;
    }
  } else {
    this.forEach((a, i) => {
      this[i] = toFill;
    });
  }

  return this;
};
