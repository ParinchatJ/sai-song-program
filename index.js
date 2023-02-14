
let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let totalPoint = 0;

  // Get event point
  let el = event.target;
  let getEventPoint = el.querySelector(".con-event #event").value;

  switch (getEventPoint) {
    case "งานแต่งงาน":
      totalPoint += 9;
      break;
    case "งานบวช":
      totalPoint += 7;
      break;
    case "งานศพ":
      totalPoint += 10;
      break;
    case "งานทอดผ้าป่า":
      totalPoint += 6;
      break;
    case "งานทำบุญใหญ่":
      totalPoint += 9;
      break;
    case "งานทำบุญขึ้นบ้านใหม่":
      totalPoint += 8;
      break;
    case "งานรับปริญญา":
      totalPoint += 5;
      break;
  }

  // Get important point
  let getImportantPoint = el.querySelector(".con-important #important").value;

  if (getImportantPoint === "มาก") {
    totalPoint += 3;
  } else if (getImportantPoint === "ปานกลาง") {
    totalPoint += 2;
  } else if (getImportantPoint === "น้อย") {
    totalPoint += 1;
  }

  // Get join point
  let getJoinPoint = el.querySelector(".con-join #join").value;

  switch (getJoinPoint) {
    case "ไปร่วมงาน":
      totalPoint += 1;
      break;
    case "ไม่ไปร่วมงาน":
      totalPoint += 3;
      break;
    case "มีตัวแทนไปร่วมงาน":
      totalPoint += 2;
      break;
  }

  // Get income point
  let getIncomePoint = el.querySelector(".con-income #income").value;

  if (getIncomePoint <= 15000) {
    totalPoint += 1;
  } else if (getIncomePoint > 15000 && getIncomePoint <= 30000) {
    totalPoint += 2;
  } else if (getIncomePoint > 30000) {
    totalPoint += 3;
  }

  console.log(totalPoint);

  // Display result
  let saiSong;
  switch (totalPoint) {
    case 8:
      saiSong = "50";
      break;
    case 9:
      saiSong = "100";
      break;
    case 10 || 11:
      saiSong = "250";
      break;
    case 12 || 13:
      saiSong = "300";
      break;
    case 14 || 15:
      saiSong = "500";
      break;
    case 16 || 17:
      saiSong = "800";
      break;
    case 18 || 19:
      saiSong = "1000";
      break;
  }

//   console.log(saiSong)

  //   Validate form
  if (
    getEventPoint == "" ||
    getImportantPoint == "" ||
    typeof getIncomePoint !== "number" ||
    getIncomePoint == "" ||
    getJoinPoint == ""
  ) {
    document.getElementById("preResultBaht").innerText = "กรุณาใส่ข้อมูลให้ครบ";
    alert('กรุณากดรีเฟรชหน้าต่างของคุณ')
  } else {
    document.getElementById("preResult").innerText = saiSong;
  }
});