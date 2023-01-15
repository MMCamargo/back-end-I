import { ITask } from '../../../../shared/interfaces';
import { Box } from '@mui/material';
import { Task } from '..';

interface ITasksListProps {
	tasks: ITask[];
}

const TasksList = (props: ITasksListProps) => {
	const { tasks } = props;

	return (
		<Box sx={{ display: 'grid', gap: 2 }}>
			{tasks &&
				tasks
					.filter((task) => !task.isArchived)
					.map((task) => (
						<Task
							key={task.uid}
							uid={task.uid}
							title={task.title}
							content={task.content}
							isArchived={false}
						/>
					))}
		</Box>
	);
};

export default TasksList;
