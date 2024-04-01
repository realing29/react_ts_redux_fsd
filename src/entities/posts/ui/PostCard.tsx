import { IPost } from '@/entities/posts/model/types'
import style from './style.module.sass'

interface IPostCard {
	post: IPost
	actionsSlot?: React.ReactNode
}

export const PostCard = ({ post, actionsSlot }: IPostCard) => {
	const { title, body } = post
	return (
		<div className={style.container}>
			<h3>{title}</h3>
			<p>{body}</p>
			<div>{actionsSlot}</div>
		</div>
	)
}
