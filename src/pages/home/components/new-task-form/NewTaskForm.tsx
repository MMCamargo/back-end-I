import { useState } from 'react';
import { useAppDispatch } from '../../../../shared/hooks';
import { handleCreateTask } from '../../functions';
import { Box, TextField, Button } from '@mui/material';

const NewTaskForm = () => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	const dispatch = useAppDispatch();

	return (
		<Box
			sx={{ display: 'flex', gap: 2 }}
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
		>
			<TextField
				size='small'
				label='Título'
				id='content'
				type='text'
				onChange={(e) => setTitle(e.target.value)}
				value={title}
			/>
			<TextField
				size='small'
				label='Conteúdo'
				id='content'
				type='text'
				onChange={(e) => setContent(e.target.value)}
				value={content}
			/>
			<Button
				variant='contained'
				type='submit'
				disabled={!!title && !!content ? false : true}
			>
				Salvar
			</Button>
		</Box>
	);
};

export default NewTaskForm;
