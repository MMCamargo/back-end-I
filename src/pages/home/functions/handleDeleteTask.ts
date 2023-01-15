import { TUseAppDispatch } from '../../../shared/types';
import { deleteTaskThunk } from '../../../store/modules/userTasksSlice';

const handleDeleteTask = async (uid: string, dispatch: TUseAppDispatch) => {
	dispatch(deleteTaskThunk(uid));
};

export default handleDeleteTask;
