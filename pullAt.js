Array.prototype.pullAt = function(args) {
  let returnArray = [];
  let array = this.slice();
  args.forEach(element => {
    let index = this.indexOf(array[element - 1]);
    if (index > -1) returnArray = returnArray.concat(this.splice(index, 1));
  });
  return returnArray;
};
