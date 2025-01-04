function moveZeroes(input){
    let index = 0;

    for(let i = 0; i < input.length; i++){
        if(input[i] !== 0){
            input[index] = input[i]
            index++
        }
    }

    while(index < input.length){
        input[index] = 0
        index++
    }

    return input
}

console.log(moveZeroes([0,1,0,3,12]))