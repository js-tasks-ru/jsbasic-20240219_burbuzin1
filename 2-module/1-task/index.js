function sumSalary(salaries) {
  let result = 0;
  for (let salariesKey in salaries) {
    if ((typeof (salaries[salariesKey]) === 'number') && isFinite(salaries[salariesKey])) {
      result += salaries[salariesKey];
    }
  }
  return result
}
