Array.prototype.chunk = function(size) {
  let array = this;
  let length = size == null ? 0 : array.length;
  let newArray = [];
  let index = 0;
  let finalIndex = 0;
  if (!length || size < 1) {
    return [];
  }
  while (index < length) {
    newArray[finalIndex++] = array.slice(index, (index += size));
  }

  return newArray;
};
