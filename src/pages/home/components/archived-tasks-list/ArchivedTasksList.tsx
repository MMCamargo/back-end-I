import { Task } from '..';
import { ITask } from '../../../../shared/interfaces';
import { Box } from '@mui/material';

interface IArchivedTaskListProps {
	tasks: ITask[];
}

const ArchivedTaskList = ({ tasks }: IArchivedTaskListProps) => {
	return (
		<Box sx={{ display: 'grid', gap: 2 }}>
			{tasks &&
				tasks
					.filter(({ isArchived }) => isArchived)
					.map(({ content, title, uid }) => (
						<Task
							content={content}
							isArchived={true}
							key={uid}
							title={title}
							uid={uid}
						/>
					))}
		</Box>
	);
};

export default ArchivedTaskList;
