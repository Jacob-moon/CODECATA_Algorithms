function solution(my_string, m, c) {
  let result = '';
  for (let i = 0; i < my_string.length; i += m) {
    const x = my_string.slice(i, i + m);
    if (c - 1 < x.length) {
      result += x[c - 1];
    }
  }
  return result;
}