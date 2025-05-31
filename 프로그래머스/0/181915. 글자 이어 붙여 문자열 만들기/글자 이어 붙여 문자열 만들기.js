function solution(my_string, index_list) {
    let result = "";
    
    for (let i of index_list) {
        result += my_string[i];
    }
    
    return result;
}

/*
문자열이 "apple"이고
index_list가 [0, 2, 4]
→ 0번째, 2번째, 4번째 글자는 'a', 'p', 'e'니까
결과는 'ape'
*/