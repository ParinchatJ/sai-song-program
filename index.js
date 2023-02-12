// แต่ง = 8 90
// บวช = 7 80
// ศพ = 10 100
// ทอดผ้าป่า = 6 60
// งานทำบุญใหญ่ = 9 70
// ทำบุญขึ้นบ้านใหม่ = 8 70
// งานรับปริญญา = 4 10


// function to get result
const getResult = () => {
    let result = document.getElementById('preResult')
    result.innerText = 'CHANGE!' // เปลี่ยนเป็นคำตอบจำนวนเงินที่รับมาจาก function อื่น
}

// click to exhibit result
let calResult = document.getElementById('clickToResult')
calResult.addEventListener('click', getResult)