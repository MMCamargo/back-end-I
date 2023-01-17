import { LogoutBtn } from '..';
import { Box } from '@mui/material';

const Navbar = () => {
	return (
		<Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
			<LogoutBtn />
		</Box>
	);
};

export default Navbar;
