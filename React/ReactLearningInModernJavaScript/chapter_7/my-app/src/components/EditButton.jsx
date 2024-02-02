import { useContext } from "react";

import { AdminFlagContext } from "./providers/AdminFlagProvider";

const style = {
  width: "100px",
  padding: "6px",
  borderRadius: "8px"
}

export const EditButton = props => {
  const { isAdmin } = props;

  const contextValue = useContext(AdminFlagContext)
  console.log(contextValue)

  // isAdmin이 false일 때(관리자가 아닐 때) 버튼을 비활성화한다.
  return (
    <button style={style} disabled={isAdmin}>
      수정
    </button>
  )
}