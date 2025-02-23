import { createSlice } from "@reduxjs/toolkit";

const requestSentSlice = createSlice({
  name: "requestSent",
  initialState: null,
  reducers: {
    addRequestSent: (state, action) => action.payload,
    removeRequestSent: (state, action) => null,
  },
});

export const { addRequestSent, removeRequestSent } = requestSentSlice.actions;

export default requestSentSlice.reducer;
