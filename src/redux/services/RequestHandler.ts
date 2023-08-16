import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {APIEndPoints} from '../../../APIEndPoints';

export const RequestHandler = createApi({
    reducerPath: 'RequestHandler',
    baseQuery: fetchBaseQuery({
        baseUrl: APIEndPoints.BackendURL,
        prepareHeaders: (headers, {getState}) => {
            const token = localStorage.getItem("token") ? localStorage.getItem("token") : ""
            if(token){
                headers.set('authorization', token);
                return headers
            }
        }  
    }),
    endpoints: (builder) => ({
        getRequest: builder.query({
            query: (body) => {
                const { url, ...rest } = body
                return {
                    url,
                    method: 'GET',
                    params: rest
                }
            }
        }),
        postRequest: builder.mutation({
            query: (body) => {
                const { url, ...rest } = body
                return {
                    url,
                    method: 'POST',
                    body: rest
                }
            },
            transformResponse: (Response, meta) => {
                meta?.response?.headers.get('authorization') ? localStorage.setItem("token", String(meta?.response?.headers.get('authorization'))) : ""
                return Response
            }
        })
    })
})

export const { usePostRequestMutation, useGetRequestQuery } = RequestHandler;