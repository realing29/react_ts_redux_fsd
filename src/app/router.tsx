import { PostsPage } from '@/pages/posts'
import { CommentsPage } from '@/pages/comments'
import { Navigate, createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Navigate to='/posts' replace />,
	},
	{
		path: '/posts',
		Component: PostsPage,
	},
	{
		path: '/comments',
		Component: CommentsPage,
	},
])
