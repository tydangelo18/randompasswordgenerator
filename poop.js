let myObject = {
    array1: ["A", "B", "C", "D", "E", "F"],
    array2: ["a", "b", "c", "d", "e", "f"],
    array3: ["1", "2", "3", "4", "5", "6"]
};

// let newArray1 = myObject.array1.toString();
let joinArray1 = myObject.array1.join('');

console.log(joinArray1);