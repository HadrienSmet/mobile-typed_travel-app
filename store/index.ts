import { configureStore } from "@reduxjs/toolkit";
import userDataSlice from "../features/userData/userData.slice";

export default configureStore({
    reducer: {
        userDataReducer: userDataSlice
    },
})
