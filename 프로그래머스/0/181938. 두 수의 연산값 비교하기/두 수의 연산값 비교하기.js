function solution(a, b) {
    const ab = Number(String(a) + String(b));
    const abab = Number(2 * a * b);
    let result;
    
    if (ab >= abab){
    result = ab;} else {
    result = abab;};
return result; 
}