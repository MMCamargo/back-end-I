import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container, Paper } from '@mui/material';
import { ConditionallyRender, Register, Login } from './components';

function Access(): JSX.Element {
	const navigate = useNavigate();

	useEffect(() => {
		const loggedUser = window.localStorage.getItem('loggedUser');

		if (loggedUser) {
			navigate('/home');
		}
	}, []);

	const [isRegistering, setIsRegistering] = useState(false);

	return (
		<Container
			maxWidth={false}
			sx={{
				display: 'grid',
				minHeight: '100vh',
				paddingX: 0,
				paddingY: { xs: 0, sm: 3 },
				placeItems: 'center',
			}}
		>
			<Paper
				sx={{
					alignItems: 'center',
					display: 'grid',
					gap: 3,
					minHeight: {
						xs: '100vh',
						sm: 'auto',
					},
					p: 3,
					width: { xs: '100%', sm: 400 },
				}}
				elevation={3}
			>
				<ConditionallyRender
					condition={isRegistering}
					show={Register(setIsRegistering)}
					elseShow={Login(setIsRegistering)}
				/>
			</Paper>
		</Container>
	);
}

export default Access;
