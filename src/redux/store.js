import { configureStore } from "@reduxjs/toolkit";
import slice from "./features/slice";
import slice2 from "./features/slice2";
import { getData } from "./baseApi/baseApi";


const store = configureStore({
    reducer: {
        [getData.reducerPath]:getData.reducer,
        name: slice,
        object:  slice2
    },
    middleware: (getDefaultMiddleware) => {
       return getDefaultMiddleware().concat(getData.middleware)
    }
})

export default store