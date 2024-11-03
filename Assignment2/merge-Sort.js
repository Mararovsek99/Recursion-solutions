function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }
    if (array.length === 2) {
        if (array[0] < array[1]) {
            return array;
        } else {
            let temp = array[1];
            array[1] = array[0];
            array[0] = temp;
            return array;
        }
    }

    const mid = Math.ceil(array.length / 2);
    const firstHalf = mergeSort(array.slice(0, mid));
    const secondHalf = mergeSort(array.slice(mid));
    
    return merge(firstHalf, secondHalf);
}

function merge(first, second) {
    const newArray = [];
    
    while (first.length > 0 && second.length > 0) {
        if (first[0] < second[0]) {
            newArray.push(first.shift()); // shift take first, and then delete them.
        } else {
            newArray.push(second.shift());
        }
    }

    while (first.length > 0) {
        newArray.push(first.shift());
    }
    while (second.length > 0) {
        newArray.push(second.shift());
    }

    return newArray;
}

console.log(mergeSort([3, 2, 8,3,7,5,3,8,9,4,3,25,47,58,25,34,23,67,19,28,]));
