
exports.min = function min (array) {
  if (!array || array.length === 0) {
    return 0;
  }
  let min = array.filter((a) => typeof(a) === 'number').sort((a,b) => a-b);
  return min.shift();
}

exports.max = function max (array) {
  if (!array || array.length === 0) {
    return 0;
  }
  let max = array.filter((a) => typeof(a) === 'number').sort((a,b) => a-b);
  return max.pop();
}

exports.avg = function avg (array) {
  if (!array || array.length === 0) {
    return 0;
  }
  let arrNum = array.filter((a) => typeof(a) === 'number'),
  avg = arrNum.reduce((a,b) => a + b) / arrNum.length;
  return avg;
}
