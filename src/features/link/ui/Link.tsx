import { LinkProps, Link as LinkRouter } from 'react-router-dom'

export const Link = (props: LinkProps) => {
	return <LinkRouter className='' {...props} />
}
