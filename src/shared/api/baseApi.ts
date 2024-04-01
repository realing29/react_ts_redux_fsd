import { COMMENTS, POSTS } from '@/shared/api/tags'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
	reducerPath: 'api',
	tagTypes: [POSTS, COMMENTS],
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4242' }),
	endpoints: () => ({}),
})
