import { ITask } from '../../../../shared/interfaces';
import { useState } from 'react';
import { NewTaskForm, ShowArchivedsBtn, ArchivedTaskList, TasksList } from '..';
import { ConditionallyRender } from '../../../../shared/components';
import { Box } from '@mui/material';

interface ITasksAreaProps {
	tasks: ITask[];
}

const TasksArea = (props: ITasksAreaProps) => {
	const { tasks } = props;

	const [showArchiveds, setShowArchiveds] = useState(false);

	return (
		<Box sx={{ display: 'grid', gap: 2 }}>
			<NewTaskForm />

			<ShowArchivedsBtn
				state={showArchiveds}
				setState={setShowArchiveds}
			/>

			<ConditionallyRender
				condition={showArchiveds}
				show={<ArchivedTaskList tasks={tasks} />}
			/>

			<TasksList tasks={tasks} />
		</Box>
	);
};

export default TasksArea;
