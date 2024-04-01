export const ButtonDelete = (props: React.HTMLAttributes<HTMLButtonElement>) => {
	return (
		<button
			style={{
				background: '#fd9c9c',
				outline: 'none',
				border: 'none',
				padding: '5px',
				borderRadius: '5px',
			}}
			{...props}
		/>
	)
}
