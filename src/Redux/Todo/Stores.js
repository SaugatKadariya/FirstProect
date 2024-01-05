import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../TodoSlice";

const Stores = configureStore({
    reducer : {
        todo : todoReducer
    }
})

export default Stores;