import { IPost } from '@/entities/posts/model/types'
import { baseApi } from '@/shared/api/baseApi'
import { POSTS } from '@/shared/api/tags'

const postsApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		posts: build.query<IPost[], void>({
			query: () => ({
				url: '/posts',
			}),
			providesTags: [POSTS],
		}),
	}),
})

export const { usePostsQuery } = postsApi
