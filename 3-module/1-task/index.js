function namify(users) {
  let namesArray = [];
  for (let user in users) {
    namesArray.push(users[user].name);
  }
  return namesArray;
}
