import { createSlice } from "@reduxjs/toolkit"


const initialState = {
   sortingData : []
}

const slice = createSlice({
    name: 'fst-slice',
     initialState,
    reducers: {
        handler: (state,{payload}) => {
            state.sortingData = payload
        }
    }
})

export const {handler} =  slice.actions
export default slice.reducer

