import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    name: 'ibrahim',
    age: 24
}

const slice = createSlice({
    name: 'fst-slice',
     initialState,
    reducers: {}
})

export default slice.reducer