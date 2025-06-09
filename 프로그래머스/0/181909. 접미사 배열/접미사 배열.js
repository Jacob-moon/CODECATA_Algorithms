function solution(my_string) {
    const arr = [];
    
    for (let i = 0; i < my_string.length; i++) {
        arr.push(my_string.substring(i));
    }
    
    arr.sort();
    
    return arr;
}