import { configureStore } from "@reduxjs/toolkit";
import slice from "./features/slice";
import { getData } from "./baseApi/baseApi";


const store = configureStore({
    reducer: {
        [getData.reducerPath]:getData.reducer,
        searchBox : slice
    },
    middleware: (getDefaultMiddleware) => {
       return getDefaultMiddleware().concat(getData.middleware)
    }
})

export default store