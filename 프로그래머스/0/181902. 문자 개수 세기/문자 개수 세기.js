function solution(my_string) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const answer = Array(52).fill(0);

    for (const char of my_string) {
        const index = alphabet.indexOf(char);
        answer[index]++;
    }

    return answer;
}