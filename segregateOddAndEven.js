function segregateEvenAndOdd(input) {
    let start = 0;
    let end = input.length - 1;

    while(start < end){
        if(input[start] % 2 == 0){
            start++
        }else if(input[end] % 2 !== 0){
            end--
        }else{
            let temp = input[start]
            input[start] = input[end]
            input[end] = temp
            start++
            end--
        }
    }
    return input
}

console.log(segregateEvenAndOdd([0,1,2,3,4,5]))