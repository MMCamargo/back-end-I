import { Task } from '..';
import { ITask } from '../../../../shared/interfaces';
import { Box } from '@mui/material';

interface ITasksListProps {
	tasks: ITask[];
}

const TasksList = ({ tasks }: ITasksListProps) => {
	return (
		<Box sx={{ display: 'grid', gap: 2 }}>
			{tasks &&
				tasks
					.filter(({ isArchived }) => !isArchived)
					.reverse()
					.map(({ content, title, uid }) => (
						<Task
							content={content}
							isArchived={false}
							key={uid}
							title={title}
							uid={uid}
						/>
					))}
		</Box>
	);
};

export default TasksList;
