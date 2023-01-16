import { IDefaultResponse } from '../../../shared/interfaces';
import { TUseAppDispatch } from '../../../shared/types';
import { updateTaskThunk } from '../../../store/modules/updateTaskSlice';
import { updateTask } from '../../../store/modules/userTasksSlice';

const handleUpdateTask = async (
	uid: string,
	title: string,
	content: string,
	dispatch: TUseAppDispatch,
	setEditingMode: React.Dispatch<React.SetStateAction<boolean>>
) => {
	const response = await dispatch(updateTaskThunk({ uid, title, content }));

	if (response.type === updateTaskThunk.fulfilled.type) {
		const { data } = response.payload as IDefaultResponse;

		dispatch(updateTask(data));

		setEditingMode(false);
	}
};

export default handleUpdateTask;
