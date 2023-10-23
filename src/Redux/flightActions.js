import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../constants/options";

export const getFlights = createAsyncThunk("getFlights", async () => {
  const res = await axios.request(options);
  const editData = res.data.aircraft.map((item) => ({
    id: item[0],
    code: item[1],
    lat: item[2],
    lan: item[3],
  }));
  return editData;
});
