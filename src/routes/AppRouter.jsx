import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import ContactUs from '../pages/Contact';
import Home from '../pages/Home';

const AppRouter = () => {
	return (
		<div className='pattern__background'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about-us' element={<About />} />
				<Route path='/contact-us' element={<ContactUs />} />
			</Routes>
		</div>
	);
};

export default AppRouter;
