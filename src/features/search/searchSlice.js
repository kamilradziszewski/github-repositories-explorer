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
    users: null,
    searchPhrase: "",
    isModalOpened: false,
    isLoading: false,
    error: "",
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
    setErrorMessage: (state, { payload }) => {
      state.error = payload;
    },
    resetErrorMessage: (state) => {
      state.isModalOpened = false;
      state.error = "";
    },
  },
  extraReducers: {
    [fetchUsers.pending]: (state, action) => {
      state.isModalOpened = true;
      state.isLoading = true;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.isModalOpened = false;
      state.isLoading = false;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [fetchReposForUser.pending]: (state, action) => {
      state.isModalOpened = true;
      state.isLoading = true;
    },
    [fetchReposForUser.fulfilled]: (state, action) => {
      state.isModalOpened = false;
      state.isLoading = false;
    },
    [fetchReposForUser.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const {
  setSearchPhrase,
  setUsers,
  setReposForUser,
  setErrorMessage,
  resetErrorMessage,
} = searchSlice.actions;

export const selectUsers = (state) => state.search.users;

export const selectSearchPhrase = (state) =>
  state.search.searchPhrase;

export const selectIsModalOpened = (state) =>
  state.search.isModalOpened;

export const selectIsLoading = (state) =>
  state.search.isLoading;

export const selectError = (state) => state.search.error;

export default searchSlice.reducer;
