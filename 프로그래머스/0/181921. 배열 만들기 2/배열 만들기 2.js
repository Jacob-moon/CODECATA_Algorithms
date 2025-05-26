function solution(l, r) {
    const result = [];

    for (let i = l; i <= r; i++) {
        const str = i.toString();
        const a = [...str].every(c => c === '0' || c === '5');
        if (a) result.push(i);
    }

    return result.length ? result : [-1];
}
