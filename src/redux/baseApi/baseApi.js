import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const getData = createApi({
    reducerPath: "getData",
    baseQuery: fetchBaseQuery({ baseUrl: 'https://divasole-server.vercel.app' }),
    endpoints: (build) => ({
        allData: build.query({
            query: () => '/alldata'
        }),
        cartData: build.query({
            query: (email) => `/cart?email=${email}`
        }),
        getDataById: build.query({
            query: (id) => `getDataById/${id}`
        }),
        specificToy: build.query({
            query: (email) => `/data?email=${email}`
        }),
        popularToys: build.query({
            query: (rating) => `/alldata?rating=${rating}`
        }),
        idData: build.query({
            query: (id) => `/id/${id}`
        }),
        user: build.query({
            query: (email) => `/user?email=${email}`
        })

    })
})

export const { useIdDataQuery, useGetDataByIdQuery, useCartDataQuery, useUserQuery, useAllDataQuery, useSpecificToyQuery, usePopularToysQuery } = getData