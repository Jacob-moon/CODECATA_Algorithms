function solution(code) {
    let ret = '';
    let mode = 0;

    for (let i = 0; i < code.length; i++) {
        const char = code[i];

        if (char === "1") {
            mode = mode === 0 ? 1 : 0;
        } else {
            if (mode === 0 && i % 2 === 0) {
                ret += char;
            } else if (mode === 1 && i % 2 === 1) {
                ret += char;
            }
        }
    }

    return ret === '' ? 'EMPTY' : ret;
}
