import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import loginReducer from "../Slice/Login/slice";
import resumeReducer from "../Slice/Resume/slice";
import activeTabSlice from "../Slice/ActiveTab/slice";

const persistConfig = {
  key: "login",
  storage,
  whitelist: ["token", "username", "userId"],
};

const persistedLoginReducer = persistReducer(persistConfig, loginReducer);

export const store = configureStore({
  reducer: {
    login: persistedLoginReducer,
    activeTab: activeTabSlice,
    resume: resumeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
