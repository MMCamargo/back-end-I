import { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

interface IEditingModeTaskProps {
	title: string;
	content: string;
	setEditingMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditingModeTask = (props: IEditingModeTaskProps) => {
	const { title, content, setEditingMode } = props;

	const [newTitle, setNewTitle] = useState(title);
	const [newContent, setNewContent] = useState(content);

	return (
		<>
			<Box sx={{ minHeight: '50px' }}>
				<TextField
					onChange={(e) => setNewTitle(e.target.value)}
					value={newTitle}
				/>
			</Box>

			<Box sx={{ minHeight: '100px' }}>
				<TextField
					onChange={(e) => setNewContent(e.target.value)}
					value={newContent}
				/>
			</Box>

			<Box
				sx={{
					display: 'flex',
					justifyContent: 'flex-end',
					gap: 2,
				}}
			>
				<Button
					variant='contained'
					onClick={() => setEditingMode(false)}
				>
					Cancelar
				</Button>

				<Button variant='contained' color='error' onClick={() => {}}>
					Salvar
				</Button>
			</Box>
		</>
	);
};

export default EditingModeTask;
