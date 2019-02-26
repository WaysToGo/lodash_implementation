Array.prototype.remove = function(fun) {
  let array = [];
  this.forEach(element => {
    if (fun(element)) {
      array = array.concat(this.splice(this.indexOf(element), 1));
    }
  });
  return array;
};
