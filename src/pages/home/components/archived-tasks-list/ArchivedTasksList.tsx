import { ITask } from '../../../../shared/interfaces';
import Task from '../task/Task';

interface IArchivedTaskListProps {
	tasks: ITask[];
}

const ArchivedTaskList = (props: IArchivedTaskListProps) => {
	const { tasks } = props;

	return (
		<>
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
		</>
	);
};

export default ArchivedTaskList;
