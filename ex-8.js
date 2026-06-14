/* 
จากโจทย์ข้อ 5 เราได้เคยคำนวณราคาสินค้าในตะกร้าไปแล้ว 
และในข้อ 6 เราได้ลองเขียนโปรแกรมเพื่อแสดงผลว่าผู้ซื้อจะได้รับส่วนลดหรือไม่ เท่าไร
ในข้อนี้ ขอให้คำนวณราคาสินค้าในตะกร้า เพื่อแสดงผลว่าผู้ซื้อจะได้รับส่วนลดหรือไม่ โดยมีเงื่อนไขคือ
ถ้าซื้อสินค้าครบ 10000 บาทขึ้นไป จะได้ส่วนลด 10%
ถ้าซื้อสินค้าครบ 5000 บาทขึ้นไป จะได้ส่วนลด 5%
นอกนั้นจะไม่ได้ส่วนลด 

สมมติลูกค้าซื้อสินค้าเป็นเงินทั้งสิ้น 15000 บาท จะเห็นข้อความ ได้ส่วนลด 10%
สมมติลูกค้าซื้อสินค้าเป็นเงินทั้งสิ้น 6000 บาท จะเห็นข้อความ ได้ส่วนลด 5%
สมมติลูกค้าซื้อสินค้าเป็นเงินทั้งสิ้น 100 บาท จะเห็นข้อความ ไม่ได้ส่วนลด เสียใจด้วย!

ข้อนี้เมื่อทำเสร็จ จะเห็นข้อความ ไม่ได้ส่วนลด เสียใจด้วย!
*/

const cart = [
    {
        name: "ข้าวสาร",
        price: 200,
        quantity: 5
    },
    {
        name: "น้ำดื่มแพ็ก",
        price: 100,
        quantity: 10
    },
    {
        name: "นมกล่อง",
        price: 50,
        quantity: 20
    },
    {
        name: "ไข่ไก่",
        price: 100,
        quantity: 3
    },
    {
        name: "ขนมปัง",
        price: 50,
        quantity: 4
    }
];

let result= 0

function discountCalculation(price){
    let totalPrice = cart.price
    let totalQuantity = cart.quantity
    let customerAmout = cart.price*cart.quantity

     for(let num of cart){
        console.log(num)
     }
     if(customerAmout  >10000){
return "ได้ส่วนลด 10%"
     } else if (customerAmout  >5000){
        return "ได้ส่วนลด 5%"
     } else {
        return "ไม่ได้ส่วนลด เสียใจด้วย!"
     }
   return result ;
}
console.log(discountCalculation(cart))