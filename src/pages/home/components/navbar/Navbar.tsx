import { Box } from '@mui/material';
import { LogoutBtn } from '..';

const Navbar = () => {
	return (
		<Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
			<LogoutBtn />
		</Box>
	);
};

export default Navbar;
