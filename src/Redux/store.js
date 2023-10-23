import { configureStore } from "@reduxjs/toolkit";
import flightSlice from "./flightSlice";

const store = configureStore({ reducer: flightSlice });

export default store;
