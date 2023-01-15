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
				id='content'
				type='text'
				onChange={(e) => setTitle(e.target.value)}
				value={title}
			/>
			<TextField
				id='content'
				type='text'
				onChange={(e) => setContent(e.target.value)}
				value={content}
			/>
			<Button
				type='submit'
				disabled={!!title && !!content ? false : true}
			>
				Salvar
			</Button>
		</Box>
	);
};

export default NewTaskForm;
