/* ให้เขียน function เพื่อหาว่าคะแนนต่ำสุดเท่ากับเท่าไร */

function findMinScore (arr) {
    // เขียนโค้ดตรงนี้
  let min =arr[0]
    for(let num of arr){
        if(num<min){
            min = num
        }
    }
return min;
}

const roomOneScores = [70, 65, 70, 80, 95, 100];
const roomTwoScore = [80, 55, 54, 74, 87, 98, 100, 45, 10];

console.log(findMinScore(roomOneScores)) // 65
console.log(findMinScore(roomTwoScore)) // 10


