import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Access, Home } from '../pages';

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Access />}></Route>
				<Route path='/home' element={<Home />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
