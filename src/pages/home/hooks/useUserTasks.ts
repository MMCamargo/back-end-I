import { useAppDispatch, useAppSelector } from '../../../shared/hooks';
import {
	userTasksSliceSelectAll,
	userTasksThunk,
} from '../../../store/modules/userTasksSlice';
import { ITask } from '../../../shared/interfaces';
import { useEffect } from 'react';

const useUserTasks = () => {
	const dispatch = useAppDispatch();
	const userTasks = useAppSelector(userTasksSliceSelectAll).data as ITask[];

	useEffect(() => {
		const { uid } = JSON.parse(window.localStorage.getItem('loggedUser')!);

		if (uid) {
			dispatch(userTasksThunk(uid!));
		}
	}, [dispatch]);

	return userTasks;
};

export default useUserTasks;
