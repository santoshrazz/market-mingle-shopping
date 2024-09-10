import { productType } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: productType[] = [];
export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, actions: PayloadAction<productType>) => {
      state.push(actions.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add } = counterSlice.actions;

export default counterSlice.reducer;
