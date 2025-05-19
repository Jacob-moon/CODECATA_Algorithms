function solution(ineq, eq, n, m) {
 if (ineq === ">" && eq === "="){return n >= m ? 1 : 0};
 if (ineq === "<" && eq === "="){return n <= m ? 1 : 0};
 if (ineq === ">" && eq === "!"){return n > m ? 1 : 0};
 if (ineq === "<" && eq === "!"){return n < m ? 1 : 0};
}
/*
function solution(ineq, eq, n, m) {
    const op = { ">=": n >= m, "<=": n <= m, ">!": n > m, "<!": n < m };
    return op[ineq + eq] ? 1 : 0;
}
와 같이 
객체리터럴 + 동적 키 접근 + 조건식 평가 로 풀수도 있다. 
*/