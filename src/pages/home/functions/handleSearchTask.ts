import { searchUserTasksThunk } from '../../../store/modules/userTasksSlice';
import { IUser } from '../../../shared/interfaces';
import { TUseAppDispatch } from '../../../shared/types';

const handleSearchTask = (searchText: string, dispatch: TUseAppDispatch) => {
	const { uid }: Partial<IUser> = JSON.parse(
		window.localStorage.getItem('loggedUser')!
	);

	const data = {
		userUid: uid as string,
		text: searchText,
	};

	dispatch(searchUserTasksThunk(data));
};

export default handleSearchTask;
