import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./customBaseQueries";

const baseurl = `https://jsonplaceholder.typicode.com/users/`;

const userApi = createApi({
    baseQuery: axiosBaseQuery({
        baseUrl: baseurl,
    }),
    endpoints: (builder) => ({
        allData: builder.query({
            query: ({limit, page}) => ({
                url: `?_limit=${limit}&_page=${page}`,
                method: 'GET'
            })
        }),
        data: builder.query({
            query: ({id}) => ({
                url: id,
                method: 'GET'
            })
        })
    })
})

export default userApi;
export const { useAllDataQuery, useDataQuery } = userApi;