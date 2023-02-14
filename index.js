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
  let getIncomePoint = Number(el.querySelector(".con-income #income").value);

  if (getIncomePoint <= 15000) {
    totalPoint += 1;
  } else if (getIncomePoint > 15000 && getIncomePoint <= 30000) {
    totalPoint += 2;
  } else if (getIncomePoint > 30000) {
    totalPoint += 3;
  }

  console.log(totalPoint);

  // Display result
  let saiSong = 0;
  switch (totalPoint) {
    case 8:
      saiSong += 50;
      break;
    case 9:
      saiSong += 100;
      break;
    case 10:
      saiSong += 250;
      break;
    case 11:
      saiSong += 270;
      break;
    case 12:
      saiSong += 300;
      break;
    case 13:
      saiSong += 400;
      break;
    case 14:
      saiSong += 500;
      break;
    case 15:
      saiSong += 600;
      break;
    case 16:
      saiSong += 800;
      break;
    case 17:
      saiSong += 900;
      break;
    case 18:
      saiSong += 1000;
      break;
    case 19:
      saiSong += 1200;
      break;
  }

  // console.log(typeof saiSong);
  // console.log(saiSong);

  // Validate form
  if (typeof getIncomePoint !== "number" || getIncomePoint == "") {
    document.getElementById("preResultBaht").innerText =
      "กรุณากรอกข้อมูลให้ครบ";
    alert("กรุณากดรีเฟรชหน้าต่างของคุณ");
  } else {
    document.getElementById("preResult").innerText = saiSong;
  }
});
