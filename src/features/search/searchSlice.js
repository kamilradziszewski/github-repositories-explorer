import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "search/fetchUsersStatus",
  async (searchPhrase) => {
    const response = await fetch(
      `https://api.github.com/search/users?q=${searchPhrase}&per_page=5`
    ).then((response) => response.json());

    return response;
  }
);

export const fetchReposForUser = createAsyncThunk(
  "search/fetchReposForUserStatus",
  async (userReposUrl) => {
    const response = await fetch(
      userReposUrl
    ).then((response) => response.json());

    return response;
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    users: [],
    searchPhrase: "",
  },
  reducers: {
    setSearchPhrase: (state, { payload }) => {
      state.searchPhrase = payload;
    },
    setUsers: (state, { payload }) => {
      state.users = payload;
    },
    setReposForUser: (state, { payload }) => {
      state.users.find(
        (user) => user.id === payload.user.id
      ).repos = payload.repos;
    },
  },
});

export const {
  setSearchPhrase,
  setUsers,
  setReposForUser,
} = searchSlice.actions;

export const selectUsers = (state) => state.search.users;

export const selectSearchPhrase = (state) =>
  state.search.searchPhrase;

export default searchSlice.reducer;
