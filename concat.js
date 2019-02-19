Array.prototype.concat = function(...args) {
  let array = this;
  let length = arguments.length;
  let i = 0;
  let newArray = array.splice(0);
  while (i < length) {
    if (Array.isArray(arguments[i])) {
      newArray.push(...arguments[i]);
    } else {
      newArray.push(arguments[i]);
    }
    i++;
  }
  return newArray;
};
