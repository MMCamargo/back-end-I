import { IUser } from '../../../shared/interfaces';
import { TUseAppDispatch } from '../../../shared/types';
import { searchTasksThunk } from '../../../store/modules/userTasksSlice';

const handleSearchTask = (searchText: string, dispatch: TUseAppDispatch) => {
	const { uid }: Partial<IUser> = JSON.parse(
		window.localStorage.getItem('loggedUser')!
	);

	const data = {
		userUid: uid as string,
		text: searchText,
	};

	dispatch(searchTasksThunk(data));
};

export default handleSearchTask;
