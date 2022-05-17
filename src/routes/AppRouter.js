import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import ContactUs from '../pages/Contact';
import Employment from '../pages/Employment';
import Locations from '../pages/Locations';
import Login from '../pages/Login';

const AppRouter = () => {
	return (
		<div className='pattern__background'>
			<Routes>
				<Route path='/' element={<Hone />} />
				<Route path='/publicis-login' element={<Login />} />
				<Route path='/locations' element={<Locations />} />
				<Route path='/about-us' element={<About />} />
				<Route path='/contact-us' element={<ContactUs />} />
				<Route path='/contact-us' element={<Employment />} />
			</Routes>
		</div>
	);
};

export default AppRouter;
