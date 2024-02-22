import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    searchInput: ''
}

const slice = createSlice({
    name: 'fst-test',
    initialState,
    reducers: {
        searchInputHandler: (e,state, { payload }) => {
            state.testdata =  e.target.value
        }
    }
})

export const { searchInputHandler } = slice.actions
export default slice.reducer

