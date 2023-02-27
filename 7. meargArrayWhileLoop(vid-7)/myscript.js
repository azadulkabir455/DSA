let arrOne = document.getElementById("arrOne");
let arrTwo = document.getElementById("arrTwo");
let updateArr = document.getElementById("updateArr");

let arrayOne = [1, 5, 9, 11, 23, 35, 44, 76];
let arrayTwo = [2, 4, 10, 24, 48];
let arrayThree = [];
let a1 = 0;
let a2 = 0;
let a3 = 0;

while (a1 < arrayOne.length && a2 < arrayTwo.length) {
    if (arrayOne[a1] < arrayTwo[a2]) {
        arrayThree[a3] = arrayOne[a1];
        a1++
    } else {
        arrayThree[a3] = arrayTwo[a2];
        a2++
    }
    a3++
}

while (a1 < arrayOne.length) {
    arrayThree[a3] = arrayOne[a1];
    a1++;
    a3++;
}
console.log(arrayThree);


arrOne.innerHTML = `[${arrayOne}]`
arrTwo.innerHTML = `[${arrayTwo}]`
updateArr.innerHTML = `[${arrayThree}]`