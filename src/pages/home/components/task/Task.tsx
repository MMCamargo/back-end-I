import { useState } from 'react';
import { Paper } from '@mui/material';
import { EditingModeTask, ViewModeTask } from '..';
import { ConditionallyRender } from '../../../../shared/components';

interface ITaskProps {
	uid: string;
	title: string;
	content: string;
	isArchived: boolean;
}

const Task = (props: ITaskProps) => {
	const { uid, title, content, isArchived } = props;

	const [editingMode, setEditingMode] = useState(false);

	return (
		<>
			<Paper sx={{ minHeight: 268.5, width: '100%' }} key={uid}>
				<ConditionallyRender
					condition={editingMode}
					show={
						<EditingModeTask
							uid={uid}
							title={title}
							content={content}
							setEditingMode={setEditingMode}
						/>
					}
					elseShow={
						<ViewModeTask
							uid={uid}
							title={title}
							content={content}
							isArchived={isArchived}
							setEditingMode={setEditingMode}
						/>
					}
				/>
			</Paper>
		</>
	);
};

export default Task;
