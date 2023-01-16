import { useState } from 'react';
import { useAppDispatch } from '../../../../shared/hooks';
import { Box, Button } from '@mui/material';
import { Input, TextArea } from '..';
import { handleUpdateTask } from '../../functions';

interface IEditingModeTaskProps {
	uid: string;
	title: string;
	content: string;
	setEditingMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditingModeTask = (props: IEditingModeTaskProps) => {
	const { uid, title, content, setEditingMode } = props;

	const [newTitle, setNewTitle] = useState(title);
	const [newContent, setNewContent] = useState(content);

	const dispatch = useAppDispatch();

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
					placeholder='Título'
					autoFocus
					value={newTitle}
					onChange={(e) => setNewTitle(e.target.value)}
				/>
			</Box>

			<Box sx={{ minHeight: 150, p: 2 }}>
				<TextArea
					placeholder='Tarefa'
					value={newContent}
					onChange={(e) => setNewContent(e.target.value)}
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
					variant='outlined'
					onClick={() => {
						setEditingMode(false);
					}}
				>
					Cancelar
				</Button>

				<Button
					variant='contained'
					onClick={() =>
						handleUpdateTask(
							uid,
							newTitle,
							newContent,
							dispatch,
							setEditingMode
						)
					}
				>
					Salvar
				</Button>
			</Box>
		</>
	);
};

export default EditingModeTask;
