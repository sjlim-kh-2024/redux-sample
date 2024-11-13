import { configureStore, createSlice } from '@reduxjs/toolkit';

// 초기 데이터
const initUser = {
    isSet: false,       // 로그인 정보 설정 여부
    id: '',             // 사용자 아이디
}

// redux state 정의, action 및 reducer 생성
const user = createSlice({
    name: "user",               // slice name
    initialState: initUser,     // slice init state
    reducers: {                 // state 변경 함수
        setup: (state, action) => { 
            state.isSet = true;
            
            const connUser = action.payload;        // 요청 시 전달된 데이터
            state.id = connUser.id;
            state.pwd = connUser.pwd;
        },
        init: (state, action) => {
            state.isSet = false;
            state.id = '';
            state.pwd = '';
        }
    }
});

// redux store 설정
const store = configureStore({
    reducer: {
        userReducer: user.reducer
    },
});

// export actions
export const { setup, init } = user.actions;

// export store
export default store;