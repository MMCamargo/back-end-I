import { TUseAppDispatch } from '../../../shared/types';
import { NavigateFunction } from 'react-router-dom';
import { removeLoggedUser } from '../../../store/modules/loggedUserSlice';

const handleLogout = (
	dispatch: TUseAppDispatch,
	navigate: NavigateFunction
) => {
	dispatch(removeLoggedUser());

	navigate('/');
};

export default handleLogout;
