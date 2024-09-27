// //정수 내림차순으로 배치하기
// 문제 설명
// 함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

// 제한 조건
// n은 1이상 8000000000 이하인 자연수입니다.
// 입출력 예
// n	return
// 118372	873211


//n 을 각자 스플릿으로 하나하나 요소로 나누고 그것들을 순회하며 높은것이 앞으로 오도록 정렬한 후 놓고 다시 합친다.
function solution(n) {
   let makesort=n.toString().split('').sort().reverse();
   let answer= Number(makesort.join(''));
   return answer;
}
console.log(solution(118372))
//1.n.toString()을 통해 숫자를 문자열로 변환합니다. "118372"
//2.split('')을 통해 각 자릿수를 배열로 나눕니다. ['1','1','8','3','7','2']
//3.sort()를 통해 문자열을 오름차순으로 정리한다. ['1','1','2','3','7','8']
//4.reverse()를 통해 sort()로 예쁘게 정리한 문자열을 순서를 뒤집는다
//5.Number()를 통해 문자열을 숫자로 변환 parseInt()로도 가능하다

//6. 5번 Number()대신 parseInt()로도 가능하다
//7. 3번과 4번의 작업에서 let makesort=n.toString().split('').sort().reverse(); 이부분을 let makesort=n.toString().split('').sort((a,b)=>(b-a); 이런식으로도 표현이 가능하다
//배열을 오름차순이아닌 내림차 순으로 변환하는 방식이다.