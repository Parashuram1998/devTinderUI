import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import userReducer from "./userSlice";
import feedReducer from "./feedSlice";

const persistConfig = { key: "root", storage };
const persistedReducer = persistReducer(persistConfig, userReducer);

const appStore = configureStore({
  reducer: {
    user: persistedReducer,
    feed: feedReducer,
  },
});

export default appStore;
