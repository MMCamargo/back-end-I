import { toggleArchiveTaskThunk } from '../../../store/modules/userTasksSlice';
import { ITask } from '../../../shared/interfaces';
import { TUseAppDispatch } from '../../../shared/types';

const handleToggleArchiveTask = (
	taskUid: string,
	dispatch: TUseAppDispatch
) => {
	const { uid } = JSON.parse(window.localStorage.getItem('loggedUser')!);

	const data: Partial<ITask> = { userUid: uid, uid: taskUid };

	dispatch(toggleArchiveTaskThunk(data));
};

export default handleToggleArchiveTask;
