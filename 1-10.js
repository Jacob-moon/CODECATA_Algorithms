//배열의 평균값
//정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.
//입출력 예 #1

// numbers의 원소들의 평균 값은 5.5입니다.
// 입출력 예 #2

// numbers의 원소들의 평균 값은 94.0입니다.
//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]	5.5
// [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]	94.0

function solution(numbers) {
    let sum=0;
    var answer=0;

    for (let i=0; i<numbers.length; i++){
        sum += numbers[i];
    }
    return answer = sum / numbers.length;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(solution([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]));