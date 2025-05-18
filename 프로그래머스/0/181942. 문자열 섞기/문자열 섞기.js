function solution(str1, str2) {
    var answer = '';
    const a = str1.split("");
    const b = str2.split("");

    for(let i = 0; i < str1.length; i++) {
        answer += a[i] + b[i];
}
    return answer;
}
//str1, str2 를 split("") 을 이용하여 한글자 씩 나누고 그 length 미만만큼 반복해서 넣는 함수