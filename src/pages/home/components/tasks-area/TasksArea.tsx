import { useState } from 'react';
import {
	ArchivedTaskList,
	SearchTask,
	ShowArchivedsBtn,
	TasksList,
	NewTaskForm,
} from '..';
import { ConditionallyRender } from '../../../../shared/components';
import { ITask } from '../../../../shared/interfaces';
import { Box } from '@mui/material';

interface ITasksAreaProps {
	tasks: ITask[];
}

const TasksArea = ({ tasks }: ITasksAreaProps) => {
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

				<SearchTask />

				<ShowArchivedsBtn
					setState={setShowArchiveds}
					state={showArchiveds}
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
