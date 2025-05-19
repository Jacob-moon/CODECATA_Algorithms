function solution(number, n, m) {
    const a = number % n;
    const b = number % m;
    return a === 0 && b === 0 ? 1 : 0;
}
// number 가 n 의 배수이면서 m 의 배수다 = 공배수 
//&& 
// 공배수 면 1 공배수 아니면 0