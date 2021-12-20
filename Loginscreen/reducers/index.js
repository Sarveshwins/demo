/* eslint-disable prettier/prettier */
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginReducer } from "../reducers/Login";
import { bookingReducer } from "../reducers/Booging";
import { userProfileReducer } from "../reducers/userProfile";
import { completebookingReducer } from "../reducers/CompletedBooking";
import { inprogressbookingReducer } from "../reducers/inprogressBooking";
import { UserRegisterReducer } from "./UserRegister";
import { OtpScreenReducer } from "./OtpScreen";
import { bookingDetailsReducer } from "./BookingDetails";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  //whitelist: ["CartReducer"],
};

const appReducer = combineReducers({
  LoginReducer: loginReducer,
  bookingReducer: bookingReducer,
  userProfileReducer: userProfileReducer,
  completebookingReducer: completebookingReducer,
  inprogressbookingReducer: inprogressbookingReducer,
  UserRegisterReducer: UserRegisterReducer,
  OtpScreenReducer: OtpScreenReducer,
  bookingDetailsReducer: bookingDetailsReducer,
});

const rootReducer = (state, action, type) => {
  if (action.type === "LOGOUT_CLEAR_REDUCER") {
    state = undefined;
  }

  return appReducer(state, action, type);
};

export default persistReducer(persistConfig, rootReducer);
