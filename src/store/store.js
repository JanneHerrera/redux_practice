import { configureStore } from "@reduxjs/toolkit";
import { mySlice, departamentoSlice } from "./mySlice";

export default configureStore({
  reducer: {
    misTrabajadores: mySlice.reducer,
    misDepartamentos: departamentoSlice.reducer,
  },
});
