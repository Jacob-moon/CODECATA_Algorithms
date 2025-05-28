function solution(n) {
    const result = [n];

    while (n !== 1) {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = 3 * n + 1;
        }
        result.push(n);
    }

    return result;
}


/* x 가 짝수면 2로 나눔 
x 가 홀수면 3 * x + 1 로 바꿈 
반복
반복된거 다 기록
x 가 1이 되면 그간 한것들 리턴
*/