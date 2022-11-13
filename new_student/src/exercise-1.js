function getInfo(...values) {
  var results = [];

  this.isFalsy = (param) => !param

  this.type = (param) => typeof param

  this.stringLength = (param) => param.toString().length

  values.forEach((value, index) => {
    results.push({
      value,
      isFalsy: isFalsy(value),
      type: type(value),
      stringLength: stringLength(value),
      index
    })
  });
  return results
}

module.exports = getInfo;