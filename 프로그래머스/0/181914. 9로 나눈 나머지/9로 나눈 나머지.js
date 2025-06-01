function solution(number) {
    var result = 0;

    for  (let sum of number){
        result += parseInt(sum)};

    return result % 9 ;
}

/*
음이 아닌 정수/9 = 음이 아닌 정수의 각 자리 숫자 합 % 9
123(넘버) = 9(상수) * 13()  

넘버 [각 자리수 합] 구하고
[합]을 [9]로 [나눈 나머지]를 리턴해야함.

*/