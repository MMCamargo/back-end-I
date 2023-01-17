import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks';
import {
	userTasksSliceSelectAll,
	userTasksThunk,
} from '../../../store/modules/userTasksSlice';
import { ITask } from '../../../shared/interfaces';

const useUserTasks = () => {
	const dispatch = useAppDispatch();
	const userTasks = useAppSelector(userTasksSliceSelectAll).data as ITask[];

	useEffect(() => {
		const loggedUser = JSON.parse(
			window.localStorage.getItem('loggedUser')!
		);

		if (!!loggedUser) {
			dispatch(userTasksThunk(loggedUser.uid));
		}
	}, [dispatch]);

	return userTasks;
};

export default useUserTasks;
