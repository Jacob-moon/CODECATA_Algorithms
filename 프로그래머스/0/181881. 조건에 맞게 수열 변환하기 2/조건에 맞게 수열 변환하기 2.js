function solution(arr) {
  let prev, curr = arr.slice();
  let count = 0;

  while (true) {
    prev = curr.slice();
    curr = curr.map(n => {
      if (n >= 50 && n % 2 === 0) return n / 2;
      if (n < 50 && n % 2 === 1) return n * 2 + 1;
      return n;
    });
    if (prev.every((v, i) => v === curr[i])) break;
    count++;
  }

  return count;
}
