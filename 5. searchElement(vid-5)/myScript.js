let arr = [10, 12, 32, 40, 88, 39, 60];

let showArray= document.getElementById("showArray");
let inputVal = document.getElementById("searchValue");
let updateArray = document.getElementById("updateArray");

showArray.innerHTML = `[ ${arr} ]; Total Length: ${arr.length}`;

const searchValue = () => {
    let value = parseInt(inputVal.value);
    let index = undefined;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === value) {
            index = i;
        }
    }
    if(index === undefined) {
        updateArray.innerHTML = "Please input valid array value"
    }else {
        updateArray.innerHTML = "Value was find on position: " + (index + 1);
    }
}