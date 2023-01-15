import { ITask } from '../../../../shared/interfaces';
import { Box } from '@mui/material';
import { Task } from '..';

interface IArchivedTaskListProps {
	tasks: ITask[];
}

const ArchivedTaskList = (props: IArchivedTaskListProps) => {
	const { tasks } = props;

	return (
		<Box sx={{ display: 'grid', gap: 2 }}>
			{tasks &&
				tasks
					.filter((task) => task.isArchived)
					.map((task) => (
						<Task
							key={task.uid}
							uid={task.uid}
							title={task.title}
							content={task.content}
							isArchived={true}
						/>
					))}
		</Box>
	);
};

export default ArchivedTaskList;
