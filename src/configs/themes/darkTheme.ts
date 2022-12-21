import { createTheme } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: blueGrey[500],
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

export default darkTheme;
