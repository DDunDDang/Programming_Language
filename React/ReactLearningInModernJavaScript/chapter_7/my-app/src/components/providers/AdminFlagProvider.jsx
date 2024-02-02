import { createContext } from "react"

export const AdminFlagContext = createContext({})

export const AdminFlagProvider = props => {
  const { children } = props;

  // 동작 확인을 위해 적절한 객체를 정의
  const sampleObj = { sampleValue: "테스트" }

  // AdminFlagContext 안에 Provider가 있으므로 각각 children을 감싼다
  // value 안에 글로벌로 다룰 실제값을 설정
  return (
    <AdminFlagContext.Provider value={sampleObj}>
      {children}
    </AdminFlagContext.Provider>
  )
}