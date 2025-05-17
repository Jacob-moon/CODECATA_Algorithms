function solution(my_string, overwrite_string, s) {
//목표 He + lloWorl + d 

    const preslice = my_string.slice(0,s); //He 
    const backslice = my_string.slice(s+overwrite_string.length); //d

    return preslice + overwrite_string + backslice;
//slice()활용하여 잘라서 붙여넣기 활용
}