function getMinMax(str) {
  let numericArr = [];
  let obj = {};
   str.split(' ').map((item, index) => isFinite(item) ? numericArr.push(item) : '');
  return obj = {'min': Math.min(...numericArr), 'max': Math.max(...numericArr)}
}
