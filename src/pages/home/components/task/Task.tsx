import { useState } from 'react';
import { EditingModeTask, ViewModeTask } from '..';
import { ConditionallyRender } from '../../../../shared/components';
import { Paper } from '@mui/material';

interface ITaskProps {
	uid: string;
	title: string;
	content: string;
	isArchived: boolean;
}

const Task = ({ uid, title, content, isArchived }: ITaskProps) => {
	const [editingMode, setEditingMode] = useState(false);

	return (
		<>
			<Paper key={uid} sx={{ minHeight: 268.5, width: '100%' }}>
				<ConditionallyRender
					condition={editingMode}
					elseShow={
						<ViewModeTask
							content={content}
							isArchived={isArchived}
							setEditingMode={setEditingMode}
							title={title}
							uid={uid}
						/>
					}
					show={
						<EditingModeTask
							content={content}
							setEditingMode={setEditingMode}
							title={title}
							uid={uid}
						/>
					}
				/>
			</Paper>
		</>
	);
};

export default Task;
