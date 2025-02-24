import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import userReducer from "./userSlice";
import feedReducer from "./feedSlice";
import connectionReducer from "./connectionSlice";
import requestReceivedReducer from "./requestsReceivedSlice";
import requestSentReducer from "./requestSentSlice";

const persistConfig = { key: "root", storage };
const persistedReducer = persistReducer(persistConfig, userReducer);

const appStore = configureStore({
  reducer: {
    user: persistedReducer,
    feed: feedReducer,
    connections: connectionReducer,
    requestsReceived: requestReceivedReducer,
    requestSent: requestSentReducer,
  },
});

export default appStore;
