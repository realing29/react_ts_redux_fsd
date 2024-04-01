import { IPost } from '@/entities/posts/model/types'
import { baseApi } from '@/shared/api/baseApi'
import { POSTS } from '@/shared/api/tags'

const postsApiFeature = baseApi.injectEndpoints({
	endpoints: (build) => ({
		postsDelete: build.mutation<IPost, number>({
			query: (id) => ({
				url: `/posts/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: [POSTS],
		}),
	}),
})

export const { usePostsDeleteMutation } = postsApiFeature
