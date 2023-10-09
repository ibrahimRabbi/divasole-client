import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
 

export const getData = createApi({
    reducerPath: "getData",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    endpoints: (build) => ({
        categoryData: build.query({
            query:(category)=>`/data/${category}`
        }),
        idData: build.query({
            query : (id)=> `/id/${id}`
        }),
        cartData: build.query({
            query: (email) => `/cart`
        }),
            
    })
})

export const {useIdDataQuery,useCategoryDataQuery,useCartDataQuery}  = getData