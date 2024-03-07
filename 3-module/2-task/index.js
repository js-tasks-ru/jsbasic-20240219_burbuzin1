function filterRange(arr, a, b) {
  return arr.filter((item) => ((arr[item] >= a) && arr[item] <= b));
}
