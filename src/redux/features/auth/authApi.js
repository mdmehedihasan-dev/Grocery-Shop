import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../../../utils/baseUrl'


export const authApi = createApi({
    reducerPath:'authApi',
    baseQuery:fetchBaseQuery({
     baseUrl:`${baseUrl()}/api/auth`,
     credentials:'include'
    }),
    endpoints:(builder)=>({
        registerUser:builder.mutation({
            query:(newUser)=>({
                url:'/register',
                method:'POST',
                body:newUser
            })
        }),
        loginUser:builder.mutation({
            query:(credentials)=>({
                url:'/login',
                method:'POST',
                body:credentials
            })
        }),
    })
   
})

export const {useLoginUserMutation,useRegisterUserMutation} = authApi
