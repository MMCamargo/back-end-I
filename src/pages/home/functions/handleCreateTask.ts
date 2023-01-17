import { createTaskThunk } from '../../../store/modules/userTasksSlice';
import { ITask } from '../../../shared/interfaces';
import { TUseAppDispatch } from '../../../shared/types';

const handleCreateTask = async (
	e: React.FormEvent<HTMLFormElement>,
	title: string,
	setTitle: React.Dispatch<React.SetStateAction<string>>,
	content: string,
	setContent: React.Dispatch<React.SetStateAction<string>>,
	dispatch: TUseAppDispatch
) => {
	e.preventDefault();

	const { uid } = JSON.parse(window.localStorage.getItem('loggedUser')!);

	const newTask: Partial<ITask> = {
		title,
		content,
		userUid: uid,
	};

	dispatch(createTaskThunk(newTask));

	setTitle('');
	setContent('');
};

export default handleCreateTask;
