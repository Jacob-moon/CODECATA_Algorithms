function solution(num, n) {
    const a = num % n 
    return a === 0 ? 1 : 0;
}
// num 이 n 의 배수인지 -> (num%n) === 0 => 1 리턴
// num 이 n 의 배수가 아니라면 -> (num%n) !== 0 => 0 리턴