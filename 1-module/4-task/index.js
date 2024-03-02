function checkSpam(str) {
  let spamWords = ['xxx', '1xbet'];
  let filteredString = str.toLowerCase();

  for (let spamWord of spamWords) {
    if (filteredString.includes(spamWord)) {
      return true;
    }
  }
  return false;
}
