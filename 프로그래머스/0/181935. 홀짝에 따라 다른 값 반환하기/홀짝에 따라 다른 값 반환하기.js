function solution(n) {
    let sum = 0;
    const isOdd = n % 2 !== 0;
    const isEven = n % 2 === 0;

    for(let i = 1; i <= n; i += 2){
        if(isOdd){
        sum += i }
    }

    for(let i = 2; i <= n; i += 2){
        if(isEven){
        sum += i * i}
}
    return sum;
}
//n 홀수면 n 이하의 홀수인 양의 정수 합을 리턴
//n 짝수면 n 이하의 짝수인 모든 양의 정수 제곱의 합 리턴
//1.n 이 홀수인지 짝수인지 ? 2. 홀수면 홀수로직 짝수면 짝수로직 2-1. 홀수로직:전부 더하기 2-2. 짝수로직 : 전부 제곱후 더하기
// a !== 0 이면 홀수 a === 0 이면 짝수
// 전부 더하려면 반복문 사용해야함

//if...else 문이 보통 쓰이지만 for 문을 두번 돌리고 isEven 으로 가시성을 확보해봤음
//물론 isOdd 이더라도 무조건 두번 돌기때문에 성능에서 손해를 보기때문에 , 코드가 길어지기에 사용x 

