import { IDefaultResponse } from '../../../shared/interfaces';
import { TUseAppDispatch } from '../../../shared/types';
import { updateTaskThunk } from '../../../store/modules/updateTaskSlice';
import { updateTask } from '../../../store/modules/userTasksSlice';

const handleUpdateTask = async (
	uid: string,
	title: string,
	content: string,
	dispatch: TUseAppDispatch
) => {
	const response = await dispatch(updateTaskThunk({ uid, title, content }));

	if (response.type === updateTaskThunk.fulfilled.type) {
		const { data } = response.payload as IDefaultResponse;

		dispatch(updateTask(data));
	}
};

export default handleUpdateTask;
