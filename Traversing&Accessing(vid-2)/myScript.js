let arr = [2, 33, 44, 54, 22, 1, 65, 25, 92, 43];

let arrList = document.getElementById("arrList")
for (let i = 0; i < arr.length; i++) {
    arrList.innerHTML += `Array Index: ${i};  Array Value: ${arr[i]} <br />`
}

const searchValue = () => {
    let getValue = document.getElementById("search").value;
    if(getValue < arr.length) {
        document.getElementById("searchValue").innerHTML = "Array value: " + arr[getValue];
    }else {
        document.getElementById("searchValue").innerHTML = "Please select the right index number";
    }
}