import { useState } from 'react';
import { Paper, Box, Typography, Button } from '@mui/material';
import { useAppDispatch } from '../../../../shared/hooks';
import {
	handleArchiveTask,
	handleUnarchiveTask,
	handleDeleteTask,
} from '../../functions';
import { EditingModeTask } from '..';

interface ITaskProps {
	uid: string;
	title: string;
	content: string;
	isArchived: boolean;
}

const Task = (props: ITaskProps) => {
	const { uid, title, content, isArchived } = props;

	const [editingMode, setEditingMode] = useState(false);

	const dispatch = useAppDispatch();

	return (
		<Paper sx={{ p: 2 }} key={uid}>
			{editingMode ? (
				<EditingModeTask
					title={title}
					content={content}
					setEditingMode={setEditingMode}
				/>
			) : (
				<>
					<Box sx={{ minHeight: '50px' }}>
						<Typography>{title}</Typography>
					</Box>

					<Box sx={{ minHeight: '100px' }}>
						<Typography>{content}</Typography>
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
							onClick={() => setEditingMode(true)}
						>
							Editar
						</Button>

						{!isArchived ? (
							<Button
								variant='contained'
								onClick={() => handleArchiveTask(uid, dispatch)}
							>
								Arquivar
							</Button>
						) : (
							<Button
								variant='contained'
								onClick={() =>
									handleUnarchiveTask(uid, dispatch)
								}
							>
								Desarquivar
							</Button>
						)}

						<Button
							variant='contained'
							color='error'
							onClick={() => handleDeleteTask(uid, dispatch)}
						>
							Excluir
						</Button>
					</Box>
				</>
			)}
		</Paper>
	);
};

export default Task;
