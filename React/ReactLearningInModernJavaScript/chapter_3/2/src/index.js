// button 태그 생성
const buttonEl = document.createElement("button")
// button 라벨 설정
buttonEl.textContent = "버튼"

// 영역 1의 div 태그 얻기
const divEl = document.querySelector(".container")

// div 태그 아래에 button 태그를 추가
divEl.appendChild(buttonEl)