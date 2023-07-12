import { configureStore } from "@reduxjs/toolkit";
import { foroSlice } from "./foro";

export const store = configureStore({

    reducer: {

        foro: foroSlice.reducer

    },

})