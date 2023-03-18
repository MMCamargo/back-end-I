import { useState } from 'react';
import { useAuthRedirect } from '../../shared/hooks';
import { Register, Login } from './components';
import { ConditionallyRender } from '../../shared/components';
import { Container, Paper } from '@mui/material';

const Access = () => {
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
				elevation={3}
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
			>
				<ConditionallyRender
					condition={isRegistering}
					elseShow={Login(setIsRegistering)}
					show={Register(setIsRegistering)}
				/>
			</Paper>
		</Container>
	);
};

export default Access;
