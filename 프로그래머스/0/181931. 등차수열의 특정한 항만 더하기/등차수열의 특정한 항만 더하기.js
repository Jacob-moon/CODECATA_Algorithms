function solution(a, d, included) {
    let result = 0;
   for(let i = 0; i < included.length; i ++){
       result += included[i] ? a + d * i : 0;
   }
    return result;
}
//등차 수열? 항증가에따라 a 부터 시작해서 d 만큼 같은 크기로 일정하게 증가하는 것
//여기서 true 인 값만 다더해서 리턴해야한다. 