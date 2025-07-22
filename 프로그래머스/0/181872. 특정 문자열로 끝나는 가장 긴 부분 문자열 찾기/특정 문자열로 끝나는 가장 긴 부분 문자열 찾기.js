function solution(myString, pat) {
  let idx = myString.lastIndexOf(pat);
  if (idx === -1) return "";
  return myString.slice(0, idx + pat.length);
}
