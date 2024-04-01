import { usePostsDeleteMutation } from '@/features/post/api/postApi'
import { ButtonDelete } from '@/shared/ui/button'

export const PostButtonDelete = ({ id }: { id: number }) => {
	const [deletePost] = usePostsDeleteMutation()
	return <ButtonDelete onClick={() => deletePost(id)}>Удалить пост</ButtonDelete>
}
