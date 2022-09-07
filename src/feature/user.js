import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "token",
  userNome: "Matheus Henrique",
  userImagem: "",
  departamentos: [],
  claims: {},
};

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userloggedIn(state, action) {
      return {
        token: action.payload.token,
        userNome: action.payload.user.userNome,
        login: action.payload.user.userLogin,
        email: action.payload.user.userEmail,
        userImagem: action.payload.user.userImage,
        departamentos: action.payload.user.departamentos,
      };
    },
    userLoggedOut(state, action) {
      return {};
    },
  },
});

export const { userloggedIn, userLoggedOut } = usersSlice.actions;

export const selectUserToken = (state) => state.user.token;

export const selectUser = (state) => state.user;

export default usersSlice.reducer;