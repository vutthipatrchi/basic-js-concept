/* 
ให้
1. แสดงข้อมูลว่า James ชอบทำกิจกรรมอะไร ในรูปแบบ James likes Playing Football.
2. แสดงข้อมูลว่า John ชอบทำกิจกรรมอะไร ในรูปแบบ John likes Playing Computer Games.
3. แสดงข้อมูลว่า Q มี id เท่ากับเท่าไร ในรูปแบบ Q's id is 3
4. ให้เปลี่ยนข้อมูล hobby ของ Q เป็น Singing
5. แสดงข้อมูลว่า Q ชอบทำกิจกรรมอะไร ในรูปแบบ Q likes Singing.
6. ให้เพิ่มข้อมูลนักเรียนเข้าไปอีกคน นักเรียนคนนี้มี id = 5 ชื่อ Lisa และชอบ Dancing 
7. ให้แสดงข้อมูลของ Lisa ออกมาในรูปแบบ Lisa's id is 5. Lisa likes Dancing.
8. ให้ลบข้อมูลของ Lisa ออก และแสดงจำนวนสมาชิกใน students ต้องเห็นว่ามีสมาชิกเท่ากับ 4
*/

const students = [
  {
    id: 1,
    name: "James",
    hobby: "Playing Football"
  },
  {
    id: 2,
    name: "JJ",
    hobby: "Coding"
  },
  {
    id: 3,
    name: "Q",
    hobby: "Playing Guitar"
  },
  {
    id: 4,
    name: "John",
    hobby: "Playing Computer Games"
  }
];
console.log(`${students[0].name} likes ${students[0].hobby}`)
console.log(`${students[3].name} likes ${students[3].hobby}`)
console.log(`${students[2].name}'s id is ${students[2].id}`)
students[2].hobby = "Singing"
console.log(`${students[2].name} likes  ${students[2].hobby}.`)
students.push({id: 5,
    name: "Lisa",
    hobby: "Dancing"})
    console.log(`${students[4].name} likes  ${students[4].hobby}.`)
    students.pop()
    console.log(students.length)
