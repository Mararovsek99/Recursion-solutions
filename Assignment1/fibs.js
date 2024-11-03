function fibonacci(n){
    
    sequence = [0,1];

    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];



    for (let i = 2; i < n ; i++){
        sequence.push(sequence[i-1] + sequence[i-2]);    
    }
    return sequence;
}
console.log(fibonacci(8)); // this gets you [ 0, 1, 1, 2, 3, 5, 8, 13]