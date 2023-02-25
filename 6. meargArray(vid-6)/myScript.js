let arrOne = document.getElementById("arrOne");
let arrTwo = document.getElementById("arrTwo");
let meargeArr = document.getElementById("meargeArr");

let arrayOne = [12, 32, 44, 55, 11, 44];
let arrayTwo = [33, 22, 77, 85];
let arrayThree = []

arrOne.innerHTML = `[${arrayOne}]`;
arrTwo.innerHTML = `[${arrayTwo}]`;

for(let i =0; i < arrayOne.length; i++) {
    arrayThree[i] = arrayOne[i];
}
for(let i =0; i < arrayTwo.length; i++) {
    arrayThree[arrayOne.length + i] = arrayTwo[i];
}

meargeArr.innerHTML = `[${arrayThree}]`
