import { useState } from 'react';
import { useAppDispatch } from '../../../../shared/hooks';
import { handleCreateTask } from '../../functions';
import { Box, Button, TextField } from '@mui/material';

const NewTaskForm = () => {
	const dispatch = useAppDispatch();

	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	return (
		<Box
			component={'form'}
			onSubmit={(e) => {
				handleCreateTask(
					e,
					title,
					setTitle,
					content,
					setContent,
					dispatch
				);
			}}
			sx={{ display: 'flex', gap: 2 }}
		>
			<TextField
				id='content'
				label='Título'
				onChange={(e) => setTitle(e.target.value)}
				size='small'
				type='text'
				value={title}
			/>
			<TextField
				id='content'
				label='Conteúdo'
				onChange={(e) => setContent(e.target.value)}
				size='small'
				type='text'
				value={content}
			/>
			<Button
				disabled={!!title && !!content ? false : true}
				type='submit'
				variant='contained'
			>
				Salvar
			</Button>
		</Box>
	);
};

export default NewTaskForm;
