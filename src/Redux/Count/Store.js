import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";
import { productsApi } from "../../pages/Rtkquery";

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    counter: counterReducer,
  },
  middleware: (defaultMiddleWare) =>
    defaultMiddleWare({}).concat([productsApi.middleware]),
});

export default store;
