import { TUseAppDispatch } from '../../../shared/types';
import { unarchiveTaskThunk } from '../../../store/modules/userTasksSlice';

const handleUnarchiveTask = (taskUid: string, dispatch: TUseAppDispatch) => {
	dispatch(unarchiveTaskThunk(taskUid));
};

export default handleUnarchiveTask;
