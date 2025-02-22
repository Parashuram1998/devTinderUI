import { createSlice } from "@reduxjs/toolkit";

const requestReceivedSlice = createSlice({
  name: "requestReceived",
  initialState: null,
  reducers: {
    addRequestsReceived: (state, action) => action.payload,
    removeRequestsReceived: (state, action) => {
      const newArray = state.filter((r) => r._id !== action.payload);
      return newArray;
    },
  },
});

export const { addRequestsReceived, removeRequestsReceived } =
  requestReceivedSlice.actions;

export default requestReceivedSlice.reducer;
