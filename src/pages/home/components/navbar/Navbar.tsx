import { LogoutBtn } from '..';
import { Box, Divider, Typography } from '@mui/material';

const Navbar = () => {
	const { firstName } = JSON.parse(
		window.localStorage.getItem('loggedUser')!
	);

	return (
		<Box sx={{}}>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<Typography>
					Bem-vindo,{' '}
					<Typography color='primary' component='span'>
						{firstName}
					</Typography>
				</Typography>

				<LogoutBtn />
			</Box>
			<Divider />
		</Box>
	);
};

export default Navbar;
