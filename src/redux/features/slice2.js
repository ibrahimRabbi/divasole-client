import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    name: 'shgakil jwsihf',
    age: 34
}

const slice2 = createSlice({
    name: "slice-2",
    initialState,
    reducers:{}
})

export default slice2.reducer