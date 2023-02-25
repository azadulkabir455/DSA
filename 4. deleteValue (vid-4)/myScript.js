let arr = [12, 33, 43, 19, 49, 72, 87];
let showArray = document.getElementById("showArray");
let updateArray = document.getElementById("updatedArray");
let inputVal = document.getElementById("indexNumber");

showArray.innerHTML = `[ ${arr} ]; Total length: ${arr.length}`;

const deleteItem = () => {
    let position = parseInt(inputVal.value) - 1;
    for (let i = position; i < arr.length; i++) {
        arr[i] = arr[i + 1];
    }

    // arr.pop();
    arr.length = arr.length - 1
    updateArray.innerHTML = `[ ${arr} ]; Now Total length: ${arr.length}`
}