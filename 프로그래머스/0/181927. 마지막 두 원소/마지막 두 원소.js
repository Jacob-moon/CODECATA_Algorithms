function solution(num_list) {
    const result = num_list;
    const last = num_list[num_list.length - 1];
    const second = num_list[num_list.length - 2];
    
    const value = last > second ? last - second : last * 2;
    
    num_list.push(value);
    
    return result; 
}