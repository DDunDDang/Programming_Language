import { useState } from "react"
import { ColoredMassage } from "./components/ColoredMessage"

export const App = () => {
  console.log("렌더링")

  //State 정의
  const [num, setNum] = useState(0)

  // 버튼 클릭 시 실행되는 함수 정의
  const onClickButton = () => {
    alert()
    setNum((prev) => prev + 1)
  }

  return (
    <>
      <h1 style={{ color: "red" }}>안녕하세요!</h1>
      <ColoredMassage color="blue">잘 지내시죠?</ColoredMassage>
      <ColoredMassage color="pink">잘 지냅니다!</ColoredMassage>
      <button onClick={onClickButton}>버튼</button>
      <p>{num}</p>
    </>
  )
}
