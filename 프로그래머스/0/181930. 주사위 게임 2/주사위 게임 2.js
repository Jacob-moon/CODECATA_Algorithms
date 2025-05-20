function solution(a, b, c) {
    const sameAll = a === b && b === c;
    const sameTwo = a === b || a === c || b === c;
    const x = a + b + c
    const xx = a**2 + b**2 + c**2
    const xxx = a**3 + b**3 + c**3 

    if(sameAll){
        return x * xx * xxx;} else if(sameTwo){
        return x * xx;} else{ 
    return x;}
}