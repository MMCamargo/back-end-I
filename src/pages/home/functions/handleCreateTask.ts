import { IDefaultResponse, ITask } from '../../../shared/interfaces';
import { createTaskThunk } from '../../../store/modules/createTaskSlice';
import { addTask } from '../../../store/modules/userTasksSlice';

const handleCreateTask = async (
	e: React.FormEvent<HTMLFormElement>,
	content: string,
	setContent: React.Dispatch<React.SetStateAction<string>>,
	dispatch: any
) => {
	e.preventDefault();

	const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser')!);
	const newTask: Partial<ITask> = {
		content: content,
		userUid: loggedUser.uid,
	};

	const response = await dispatch(createTaskThunk(newTask));

	if (response.type === createTaskThunk.fulfilled.type) {
		const { data } = response.payload as IDefaultResponse;

		dispatch(addTask(data));
	}

	setContent('');
};

export default handleCreateTask;
