function solution(my_strings, parts) {
    let answer = '';
    parts.forEach((part, i) => {
        const s = part[0];
        const e = part[1];
        const substring = my_strings[i].substring(s, e + 1);
        answer += substring;
    });
    return answer;
}
