import { updateTaskThunk } from '../../../store/modules/userTasksSlice';
import { ITask } from '../../../shared/interfaces';
import { TUseAppDispatch } from '../../../shared/types';

const handleUpdateTask = async (
	taskUid: string,
	title: string,
	content: string,
	dispatch: TUseAppDispatch,
	setEditingMode: React.Dispatch<React.SetStateAction<boolean>>
) => {
	const { uid } = JSON.parse(window.localStorage.getItem('loggedUser')!);

	const task: Partial<ITask> = {
		userUid: uid,
		uid: taskUid,
		title,
		content,
	};

	dispatch(updateTaskThunk(task));

	setEditingMode(false);
};

export default handleUpdateTask;
