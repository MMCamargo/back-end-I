import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Access from '../pages/access/Access';
import Home from '../pages/home/Home';

function AppRoutes(): JSX.Element {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Access />}></Route>
				<Route path='/home' element={<Home />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default AppRoutes;
