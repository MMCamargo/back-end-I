import { ITask } from '../../../../shared/interfaces';
import Task from '../task/Task';

interface ITasksListProps {
	tasks: ITask[];
}

const TasksList = (props: ITasksListProps) => {
	const { tasks } = props;

	return (
		<>
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
		</>
	);
};

export default TasksList;
