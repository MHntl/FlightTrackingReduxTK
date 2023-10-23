import { createSlice } from "@reduxjs/toolkit";
import { getFlights } from "./flightActions";

const initialState = {
  flights: [],
  isLoading: false,
  isError: false,
  route: [],
};
const flightSlice = createSlice({
  name: "flightSlice",
  initialState,
  reducers: {
    setRoute: (state, action) => {
      const data = action.payload.map((i) => [i.lat, i.lng]);
      state.route = data;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFlights.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getFlights.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.flights = action.payload;
    });
    builder.addCase(getFlights.rejected, (state) => {
      state.isLoading = false;
      state.isError = false;
    });
  },
});

export const { setRoute } = flightSlice.actions;
export default flightSlice.reducer;
