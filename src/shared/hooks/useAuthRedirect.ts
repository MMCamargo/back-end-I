import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type TPage = 'access' | 'home';

const useAuthRedirect = (page: TPage) => {
	const navigate = useNavigate();

	useEffect(() => {
		const loggedUser = window.localStorage.getItem('loggedUser');

		switch (page) {
			case 'access':
				!!loggedUser ? navigate('/home') : navigate('/');
				break;

			case 'home':
				!!loggedUser ? navigate('/home') : navigate('/');
				break;

			default:
				navigate('/');
				break;
		}
	}, [page]);
};

export default useAuthRedirect;
