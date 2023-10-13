import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
 

export const getData = createApi({
    reducerPath: "getData",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    endpoints: (build) => ({
        categoryData: build.query({
            query:(category)=>`/data/${category}`
        }),
        allData: build.query({
            query:()=>'/data'
        }),
        cartData: build.query({
            query: (email) => `/cart?email=${email}`
        }),
        specificToy: build.query({
            query: (email) =>`/data?email=${email}`
        }),
        popularToys: build.query({
            query: (rating) =>`/data?rating=${rating}`
        }),
        idData: build.query({
            query : (id)=> `/id/${id}`
        }),
        
        user: build.query({
            query:(email) => `/user?email=${email}`
        })
            
    })
})

export const {useIdDataQuery,useCategoryDataQuery,useCartDataQuery,useUserQuery,useAllDataQuery,useSpecificToyQuery,usePopularToysQuery}  = getData