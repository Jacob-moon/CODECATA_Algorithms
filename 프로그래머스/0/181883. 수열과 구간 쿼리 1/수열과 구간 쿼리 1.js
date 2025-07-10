function solution(arr, queries) {
  const diff = new Array(arr.length + 1).fill(0);
  
  for (const [s, e] of queries) {
    diff[s] += 1;
    if (e + 1 < diff.length) diff[e + 1] -= 1;
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += diff[i];
    arr[i] += sum;
  }

  return arr;
}
