/////////////////////////////////
// freeCodeCamp JS Challenges //
///////////////////////////////

// Challenge 1
// Where do I belong? (Return the lowest index at which a value should be inserted into an array once it has been sorted)

const getIndexToIns = (arr, num) => {
    arr.sort((a, b) => {
        return a - b
    })

    for (let i=0; i < arr.length; i++) {
        if (num <= arr[i]) {
            return i;
        }
    }
    return arr.length
}

console.log(getIndexToIns([40, 60, 5], 50))
// expected outcome 2

// Challenge 2
// Sum All Numbers in a Range

const sumAll = (arr) => {
    let start = Math.min(arr[0], arr[1])
    let finish = Math.max(arr[0], arr[1])
    let total = 0

    for (let i=start; i <= finish; i++) {
        total += i
    }
    return total
}

console.log(sumAll([1, 4]))
// expected outcome 10