import { TUseAppDispatch } from '../../../shared/types';
import { archiveTaskThunk } from '../../../store/modules/userTasksSlice';

const handleArchiveTask = (taskUid: string, dispatch: TUseAppDispatch) => {
	dispatch(archiveTaskThunk(taskUid));
};

export default handleArchiveTask;
