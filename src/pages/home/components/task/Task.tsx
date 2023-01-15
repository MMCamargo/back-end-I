import { Paper, Typography, Button } from '@mui/material';
import { useAppDispatch } from '../../../../shared/hooks';
import {
	handleArchiveTask,
	handleUnarchiveTask,
	handleDeleteTask,
} from '../../functions';

interface ITaskProps {
	uid: string;
	title: string;
	content: string;
	isArchived: boolean;
}

const Task = (props: ITaskProps) => {
	const { uid, title, content, isArchived } = props;
	const dispatch = useAppDispatch();

	return (
		<Paper key={uid}>
			<Typography>{title}</Typography>
			<Typography>{content}</Typography>
			<Button>Editar</Button>
			{!isArchived ? (
				<Button onClick={() => handleArchiveTask(uid, dispatch)}>
					Arquivar
				</Button>
			) : (
				<Button onClick={() => handleUnarchiveTask(uid, dispatch)}>
					Desarquivar
				</Button>
			)}
			<Button onClick={() => handleDeleteTask(uid, dispatch)}>
				Excluir
			</Button>
		</Paper>
	);
};

export default Task;
