/* 
ให้เขียนโปรแกรมเพื่อคำนวณว่าต้องจ่ายเงินทั้งหมดกี่บาท เพื่อซื้อสินค้าใน cart
เมื่อโปรแกรมทำงาน จะเห็นข้อความ ต้องจ่ายเงินทั้งหมด 3500 บาท 
*/

const cart = [
    {
        name: "เสื้อยืด",
        price: 200,
        quantity: 5
    },
    {
        name: "กางเกงยีนส์",
        price: 500,
        quantity: 2
    },
    {
        name: "รองเท้าผ้าใบ",
        price: 1000,
        quantity: 1
    },
    {
        name: "ผงซักฟอก",
        price: 100,
        quantity: 3
    },
    {
        name: "กระดาษทิชชู",
        price: 50,
        quantity: 4
    }
];
let grandTotal = 0;
for (let num of cart){
let totalPrice = num.price
console.log(totalPrice)
let totalQuanity = num.quantity
console.log(totalQuanity)
let result = totalPrice * totalQuanity
grandTotal += result;
}
console.log(grandTotal)