import { createSlice } from "@reduxjs/toolkit";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { BASE_URL } from "../../utils/apiUrl";

interface ProductState {
  data: any[];
  status: "idle" | "loading" | "error";
}

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: "idle",
  } as ProductState,
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});
export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

export const fetchProducts = (): ThunkAction<
  void,
  ProductState,
  unknown,
  any
> => {
  return async function fetchProductThunk(dispatch: any) {
    dispatch(setStatus("loading"));
    try {
      const response = await fetch(`${BASE_URL}`);
      const data = await response.json();
      dispatch(setProducts(data));
      dispatch(setStatus("idle"));
    } catch (error) {
      dispatch(setStatus("error"));
    }
  };
};
