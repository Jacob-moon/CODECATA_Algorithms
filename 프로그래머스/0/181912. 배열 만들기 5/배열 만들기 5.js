function solution(intStrs, k, s, l) {
    var ret = [];

    for(let i = 0; i < intStrs.length ; i++){
    const substr = intStrs[i].substring(s , s + l);
    const num = Number(substr);
    
    if(num > k){
        ret.push(num);
              }
    
    }
    return ret;
}
/*
문자열배열 intStrs 각 원소마다 s 번 인덱스에서 
시작하는 길이 l 짜리 부분문자열을 '잘라내 정수로 변환' 합니다.
조건은 변환후 값 > k 을 담은 배열을 리턴해야해요 

1. 
*/