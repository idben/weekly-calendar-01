const dayContainer = document.querySelector(".weekContainer .days");
const divYear = document.querySelector(".weekContainer .year");
const divMonth = document.querySelector(".weekContainer .month");
const btnPrev = document.querySelector(".btnPrev");
const btnNext = document.querySelector(".btnNext");
const template = document.querySelector("#dayTemp");
const bookingData = [
  {date: "2024-04-13", area: 1, note: "陳同學 - 小提琴"},
  {date: "2024-04-27", area: 0, note: "王同學 - 鋼琴"},
  {date: "2024-04-18", area: 1, note: "王同學 - 鋼琴"},
  {date: "2024-04-20", area: 2, note: "李同學 - 笑女白琴"},
];

let baseDate = new Date();
setDays();

btnPrev.addEventListener("click", () =>{
  baseDate.setDate(baseDate.getDate() - 7);
  setDays();
})
btnNext.addEventListener("click", () =>{
  baseDate.setDate(baseDate.getDate() + 7);
  setDays();
})

function setDays(){
  let dateOfWeek = getWeekDates(baseDate, 1);
  divYear.textContent = dateOfWeek.startYear;
  divMonth.textContent = dateOfWeek.startMonth;
  dayContainer.innerHTML = "";
  dateOfWeek.weekDates.forEach((d, index) => {
    let clone = template.content.cloneNode(true);
    let divMonth = clone.querySelector(".month");
    let divDate = clone.querySelector(".date");
    divMonth.textContent = d[0];
    divDate.textContent = d[1];
    let checkString = `${dateOfWeek.startYear}-${d[0].toString().padStart(2, "0")}-${d[1]}`;
    bookingData.forEach(ckd => {
      if(ckd.date === checkString){
        console.log(`.area${ckd.area}`);
        let divArea = clone.querySelector(`.area${ckd.area}`);
        divArea.innerHTML += `<br><div class="note">${ckd.note}</div>`
      }
    })
    dayContainer.append(clone)
  });
}

function getWeekDates(date, startOfWeek = 0) {
  // 由第二個參數調整第一天是星期一或星期天
  // 獲取輸入日期是星期幾（0代表星期日，6代表星期六）
  let dayOfWeek = date.getDay();
  // 如果一週的開始設定為星期一，則進行調整
  if (startOfWeek === 1) {
    dayOfWeek = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // 星期日調整為索引6
  } else {
    // 保持星期日作為一週的開始，不需要調整
    dayOfWeek = dayOfWeek;
  }

  // 根據一週的開始日計算當週的第一天
  const start = new Date(date);
  start.setDate(date.getDate() - dayOfWeek + (startOfWeek === 1 ? 0 : 0));

  // 用於存儲結果的陣列
  const weekDates = [];

  for (let i = 0; i < 7; i++) {
    const weekDay = new Date(start);
    weekDay.setDate(start.getDate() + i);
    weekDates.push([weekDay.getMonth() + 1, weekDay.getDate()]);
  }

  return {weekDates, startYear: start.getFullYear(), startMonth: start.getMonth()+1};
}
