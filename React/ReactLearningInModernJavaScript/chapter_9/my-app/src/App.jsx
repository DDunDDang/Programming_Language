import { useState } from "react";
import { useFetchUsers } from "./hooks/useFetchUsers";

export const App = () => {
  const { userList, isLoading, isError, onClickFetchUser } = useFetchUsers();
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);

  // // 사용자 정보 얻기 버튼 클릭 시 액션
  // const onClickFetchUser = () => {
  //   // 버튼 클릭 시 로딩 on, 에러 플래그 off
  //   setIsLoading(true);
  //   setIsError(false);

  //   // API 실행
  //   axios
  //   .get("http://localhost:8080/users")
  //   .then(result => {
  //     // 성과 이름을 결합하도록 변환
  //     const users = result.data.map(user => ({
  //       id: user.id,
  //       name: `${user.lastname} ${user.firstname}`,
  //       age: user.age
  //     }));
  //     // 사용자 목록 State 업데이트
  //     setUserList(users);
  //   })
  //   //에러가 발새하면 에러 플래그 On
  //   .catch(() => setIsError(true))
  //   //처리가 완료된 뒤에는 로딩 플래그 off
  //   .finally(() => setIsLoading(false));
  // };

  return (
    <div>
      <button onClick={onClickFetchUser}>사용자 정보 얻기</button>
      {/** 에러 발생 시 에러 메시지 표시 */}
      {isError && <p style={{ color: "red"}}>에러가 발생했습니다</p>}
      {/** 로딩 중에는 표시 전환 */}
      {isLoading ? (
        <p>데이터를 가져오고 있습니다</p>
      ) : (
        userList.map(user => (
          <p key={user.id}>{`${user.id}: ${user.name}(${user.age}세)`}</p>
        ))
      )}
    </div>
  )
}