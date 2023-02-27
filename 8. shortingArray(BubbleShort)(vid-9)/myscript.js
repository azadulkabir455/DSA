let arr = document.getElementById("arr");
let shortedArr = document.getElementById("shortedArr");

let array = [12, 4, 56, 78, 44, 66];

arr.innerHTML = `[ ${array} ]`;

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (array[j] > array[j + 1]) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }
}

shortedArr.innerHTML = `[ ${array} ] <br/> <br/> [ ${array.reverse()} ]`
