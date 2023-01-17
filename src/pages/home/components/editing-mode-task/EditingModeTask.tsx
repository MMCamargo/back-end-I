import { useState } from 'react';
import { useAppDispatch } from '../../../../shared/hooks';
import { handleUpdateTask } from '../../functions';
import { Input, TextArea } from '..';
import { Box, Button } from '@mui/material';

interface IEditingModeTaskProps {
	uid: string;
	title: string;
	content: string;
	setEditingMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditingModeTask = ({
	content,
	setEditingMode,
	title,
	uid,
}: IEditingModeTaskProps) => {
	const dispatch = useAppDispatch();

	const [newTitle, setNewTitle] = useState(title);
	const [newContent, setNewContent] = useState(content);

	return (
		<>
			<Box
				sx={{
					display: 'grid',
					minHeight: 50,
					p: 2,
					placeItems: 'center',
				}}
			>
				<Input
					autoFocus
					onChange={(e) => setNewTitle(e.target.value)}
					placeholder='Título'
					value={newTitle}
				/>
			</Box>

			<Box sx={{ minHeight: 150, p: 2 }}>
				<TextArea
					onChange={(e) => setNewContent(e.target.value)}
					placeholder='Tarefa'
					value={newContent}
				/>
			</Box>

			<Box
				sx={{
					alignItems: 'center',
					display: 'flex',
					gap: 2,
					p: 2,
					justifyContent: {
						xs: 'space-between',
						sm: 'flex-end',
					},
				}}
			>
				<Button
					onClick={() => {
						setEditingMode(false);
					}}
					variant='outlined'
				>
					Cancelar
				</Button>

				<Button
					onClick={() =>
						handleUpdateTask(
							uid,
							newTitle,
							newContent,
							dispatch,
							setEditingMode
						)
					}
					variant='contained'
				>
					Salvar
				</Button>
			</Box>
		</>
	);
};

export default EditingModeTask;
