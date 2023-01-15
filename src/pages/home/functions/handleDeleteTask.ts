import { deleteTaskThunk } from '../../../store/modules/userTasksSlice';

const handleDeleteTask = async (uid: string, dispatch: any) => {
	dispatch(deleteTaskThunk(uid));
};

export default handleDeleteTask;
