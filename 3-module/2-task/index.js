function filterRange(arr, a, b) {
  let filteredArr = [];
  for (let item in arr) {
    if ((arr[item] >= a) && arr[item] <= b){
      filteredArr.push(arr[item]);
    }
  }
  return filteredArr;
}
