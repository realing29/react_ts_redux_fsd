import { usePostsQuery } from '@/entities/posts/api/postsApi'
import { PostWidget } from '@/widgets/postWidget/ui/PostWidget'

export const PostsPage = () => {
	const { data, isSuccess } = usePostsQuery()
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: '20px',
				padding: '10px',
			}}
		>
			{isSuccess && data.map((post) => <PostWidget key={post.id} post={post} />)}
		</div>
	)
}
