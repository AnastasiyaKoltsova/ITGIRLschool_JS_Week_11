let price1 = document.querySelector('.price').innerHTML;
let price2 = document.querySelectorAll('.price')[1].innerHTML;
let price3 = document.querySelectorAll('.price')[2].innerHTML;
let price4 = document.querySelectorAll('.price')[3].innerHTML;


let arr = [Number(price1), Number(price2), Number(price3), Number(price4)];

const valueOfPrice = (arr) => {
    let result = 0;
    for (let i = 0; i < arr.length; i += 1) {
        result += arr[i];
    }
    return result;
}

const res = valueOfPrice(arr);

document.getElementById('finalValue').textContent = res;

const discount = (res) => {
    return res * 0.8;
};

let button = document.getElementById('elem');

button.onclick = function() {
    const finalValueAfterDiscount = document.getElementById('finalValue').textContent = discount(res);
    return `${finalValueAfterDiscount} руб.`;
};