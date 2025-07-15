function solution(myString) {
    var answer = '';
    for(let i = 0; i < myString.length; i++){
        const char = myString[i]
        if(char === 'a'){
            answer += 'A'
        }else if(char !== 'A') {
            answer += char.toLowerCase()
        }else {
            answer += char
        }
    }
    return answer;
}