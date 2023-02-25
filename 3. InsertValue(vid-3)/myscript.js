
let previousarr = document.getElementById("previousarr");
let showresult = document.getElementById("showresult");
let arrLength = document.getElementById("arrLength");

let arr = [29, 3, 14, 5, 22, 34, 32];
previousarr.innerHTML = `[${arr}]`;
arrLength.innerHTML = `max index length: ${arr.length}`;

const updateArr = () => {
    let val = document.getElementById("value").value;
    let index = document.getElementById("index").value;

    for (let i = arr.length - 1; i >= 0; i--) {
        if (index <= i) {
            arr[i + 1] = arr[i];
            if (index == i) {
                arr[i] = val;
            }

        }
    }
    console.log("hi",val, index)
    showresult.innerHTML = `[${arr}]`
}