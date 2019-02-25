Array.prototype.join = function(value) {
  value = value || "";
  let strReturnVal = "";
  for (let i = 0; i < this.length; i++) {
    strReturnVal += this[i];
    if (i < this.length - 1) {
      strReturnVal += value;
    }
  }

  return strReturnVal;
};
