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
			<Box
				sx={{
					display: 'flex',
					gap: 2,
					justifyContent: 'space-between',
				}}
			>
				<NewTaskForm />

				<ShowArchivedsBtn
					state={showArchiveds}
					setState={setShowArchiveds}
				/>
			</Box>

			<ConditionallyRender
				condition={showArchiveds}
				show={<ArchivedTaskList tasks={tasks} />}
			/>

			<TasksList tasks={tasks} />
		</Box>
	);
};

export default TasksArea;
