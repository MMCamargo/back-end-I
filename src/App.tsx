import { lightTheme, darkTheme } from './configs/themes';
import { ThemeProvider, CssBaseline } from '@mui/material';
import AppRoutes from './routes/Router';

function App(): JSX.Element {
	return (
		<>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<AppRoutes />
			</ThemeProvider>
		</>
	);
}

export default App;
