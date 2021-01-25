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

getIndexToIns([40, 60, 5], 50)
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

sumAll([1, 4])
// expected outcome 10

// Challenge 3
// Diff Two Arrays (compare 2 arrays and return a new array with any items only found in one of the 2 given arrays but not both)

const diffArray = (arr1, arr2) => {
    let newArr = []

    for (let i=0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1) {
            newArr.push(arr1[i])
        }
    }
    for (let j=0; j < arr2.length; j++) {
        if (arr1.indexOf(arr2[j]) === -1) {
            newArr.push(arr2[j])
        }
    }
    return newArr
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])
// expected outcome [4]

// Challenge 4
// Roman Numeral Converter (convert given number into a roman numeral)

const convertToRoman = (num) => {
    const romanNumeral = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }

    let roman = ""

    for (let key in romanNumeral) {
        while(num >= romanNumeral[key]) {
            roman += key
            num -= romanNumeral[key]
        }
    }
    return roman
}

convertToRoman(8)

