import { IDefaultResponse, ITask } from '../../../shared/interfaces';
import { TUseAppDispatch } from '../../../shared/types';
import { createTaskThunk } from '../../../store/modules/createTaskSlice';
import { addTask } from '../../../store/modules/userTasksSlice';

const handleCreateTask = async (
	e: React.FormEvent<HTMLFormElement>,
	title: string,
	setTitle: React.Dispatch<React.SetStateAction<string>>,
	content: string,
	setContent: React.Dispatch<React.SetStateAction<string>>,
	dispatch: TUseAppDispatch
) => {
	e.preventDefault();

	const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser')!);
	const newTask: Partial<ITask> = {
		title,
		content,
		userUid: loggedUser.uid,
	};

	const response = await dispatch(createTaskThunk(newTask));

	if (response.type === createTaskThunk.fulfilled.type) {
		const { data } = response.payload as IDefaultResponse;

		dispatch(addTask(data));
	}

	setTitle('');
	setContent('');
};

export default handleCreateTask;
