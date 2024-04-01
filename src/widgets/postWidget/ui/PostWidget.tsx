import { IPost } from '@/entities/posts/model/types'
import { PostCard } from '@/entities/posts/ui/PostCard'
import { Link } from '@/features/link'
import { PostButtonDelete } from '@/features/post/ui/PostButtonDelete'

export const PostWidget = ({ post }: { post: IPost }) => {
	return (
		<PostCard
			key={post.id}
			post={post}
			actionsSlot={
				<div style={{ display: 'flex', gap: '10px', alignItems: 'baseline' }}>
					<Link to={`/post/${post.id}`}>Открыть</Link>
					<PostButtonDelete id={post.id} />
				</div>
			}
		/>
	)
}
