function solution(arr, queries) {
    let result = [];
    
    for (let [s,e,k] of queries){
        const x = arr.slice(s , e + 1);
        const y = x.filter((num) => num > k)
        
        if(y.length === 0){
            result.push(-1);
            } else {
            result.push(Math.min(...y));
    }
}
    return result;
}
/*
살펴봐야 하는 숫자들의 구간이 정해져 있다 (시작점부터 끝점까지)
그 구간 내에서 k보다 큰 숫자들만 관심 있다
그 숫자들 중에서 가장 작은 값을 찾는다
만약 조건을 만족하는 숫자가 없다면 -1이라고 기록한다
*/