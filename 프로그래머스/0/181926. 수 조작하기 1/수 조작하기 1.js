function solution(n, control) {

    const change  = {
    w : 1,
    s : -1,
    d : 10,
    a : -10
                };
    for (const arr of control){
    n += change[arr];
        }

    return n;
}