import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks';
import {
	getUserTasksThunk,
	userTasksSliceSelectAll,
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
			dispatch(getUserTasksThunk(loggedUser.userUid));
		}
	}, [dispatch]);

	return userTasks;
};

export default useUserTasks;
