import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../shared/hooks';
import { handleLogout } from '../../functions';
import { Button } from '@mui/material';

const LogoutBtn = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	return (
		<Button onClick={() => handleLogout(dispatch, navigate)} size='large'>
			Sair
		</Button>
	);
};

export default LogoutBtn;
