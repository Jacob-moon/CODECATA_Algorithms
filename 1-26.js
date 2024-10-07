// // //음양 더하기

// // 문제 설명
// // 어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 
// 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

// // 제한사항
// // absolutes의 길이는 1 이상 1,000 이하입니다.
// // absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
// // signs의 길이는 absolutes의 길이와 같습니다.
// // signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.
// // 입출력 예
// // absolutes	signs	result
// // [4,7,12]	[true,false,true]	9
// // [1,2,3]	[false,false,true]	0
// // 입출력 예 설명
// // 입출력 예 #1

// // signs가 [true,false,true] 이므로, 실제 수들의 값은 각각 4, -7, 12입니다.
// // 따라서 세 수의 합인 9를 return 해야 합니다.
// // 입출력 예 #2

// // signs가 [false,false,true] 이므로, 실제 수들의 값은 각각 -1, -2, 3입니다.
// // 따라서 세 수의 합인 0을 return 해야 합니다.

function solution(absolutes, signs) {

    let answer =0;

    for(let i=0; i<absolutes.length; i++){
        if(signs[i]){ 
            answer += absolutes[i];
        }else{
            answer -= absolutes[i];
        }
    }

    return answer;

}

//true 이면 양수 false 이면 음수를 말하고 각 원소 값들의 합을 출력하는 문제.
//첫번째 생각.
//일단, signs[i]가 true 인지 false 인지 구별하는 조건문 작성
//answer = 0 에 absolutes 의 값을 += 즉 양수로 더해줄것인지 -= 음수로 빼줄것인지 작성.
//return 으로 다시 answer 작성

console.log(solution([4,7,12],[true,false,true])); //9
console.log(solution([1,2,3],[false,false,true])); //0