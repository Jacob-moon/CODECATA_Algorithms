function solution(my_string, indices) {
    const del = new Set(indices);
    return [...my_string]
        .filter((_, i) => !del.has(i))
        .join('');
}