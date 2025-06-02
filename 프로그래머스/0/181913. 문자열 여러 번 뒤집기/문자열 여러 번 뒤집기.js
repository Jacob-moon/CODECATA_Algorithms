function solution(my_string, queries) {
    let chars = my_string.split("");

    for (let [s, e] of queries) {
        const reversed = chars.slice(s, e + 1).reverse(); 
        chars.splice(s, e - s + 1, ...reversed);
    }

    return chars.join("");
}
