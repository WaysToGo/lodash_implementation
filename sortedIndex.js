Array.prototype.sortedIndex = function(value) {
  let search = (start, end) => {
    let i = Math.floor((start + end - 1) / 2);
    if (this.indexOf(value) > -1) {
      return this.indexOf(value);
    }
    if (this[i] < value && this[i + 1] > value) {
      return i + 1;
    }
    if (this[start] > value) {
      return start;
    }
    if (this[end] < value) {
      return end;
    }

    return this[i] > value ? search(start, i) : search(i, end);
  };
  return search(0, this.length);
};
