import { useDispatch, useSelector } from "react-redux";

import './App.css';
import { init, setup } from "./store";
import { useEffect } from "react";

/*
    * Redux : js, react 등에서 사용되는 상태 관리 라이브러리
              전역 상태 관리 지원
    * Store : 상태를 보관하는 객체
              직접 변경할 수 없으며, 액션을 통해 변경
    * Action : 상태를 변경하기 위한 행위를 나타내는 객체
               - type : 행위의 종류
               - payload : 상태 변경에 필요한 데이터
    * Slice : 리덕스에서 상태와 상태를 변경하는 리듀서를 하나로 묶은 개념
              상태 + 액션 + 리듀서
    * Dispatch : 액션을 스토어로 보내는 함수
*/
function App() {
  // get redux state : store에서 관리되는 userReducer 슬라이스에서 관리되는 상태(사용자 정보)를 가지고 옴
  const userInfo = useSelector((state) => state.userReducer);

  // redux store 에서 action을 디스패치할 수 있도록 하는 훅  ( * 디스패치: action을 redux store로 보내는 작업 )
  const dispatch = useDispatch();

  const loginUser = () => {
    // setup 액션을 통해 사용자 정보를 payload로 전달하여 로그인 상태 설정
    dispatch(setup({id: 'sjlim'}));
  }

  const logoutUser = () => {
    // init 액션을 실행하여 사용자 정보를 초기화하고 로그아웃 상태로 변경
    dispatch(init());
  }

  useEffect(()=>{
    console.log(userInfo);    
  }, [userInfo]);

  return (
      <div className="App-header">
        <button onClick={loginUser}>로그인</button>
        <button onClick={logoutUser}>로그아웃</button>
        { 
          userInfo.isSet ?
          <h1>{userInfo.id}님 환영합니다^^</h1> :
          ''
        }
      </div>
  );
}

export default App;
