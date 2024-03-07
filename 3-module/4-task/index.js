function showSalary(users, age) {
  let filteredUsers = '';
  let delimeter = '\n';
  for (let user in users) {
    if (users[user].age <= age){
      filteredUsers += (!isEmpty(filteredUsers) ? delimeter : '')  + users[user].name + ', ' + users[user].balance
    }
  }
  return filteredUsers;
}
