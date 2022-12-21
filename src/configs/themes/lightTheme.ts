import { createTheme } from '@mui/material';
import { indigo } from '@mui/material/colors';

const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: indigo[500],
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 475,
			md: 815,
			lg: 1024,
			xl: 1440,
		},
	},
});

export default lightTheme;
