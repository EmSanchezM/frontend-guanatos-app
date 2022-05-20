import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import CarouselCrud from '../pages/CarouselCrud';
import FormCarousel from '../pages/CarouselCrud/Form';
import ContactUs from '../pages/Contact';
import Employment from '../pages/Employment';
import GalleryForm from '../pages/GalleryCrud/GalleryForm';
import Home from '../pages/Home';
import Locations from '../pages/Locations';
import Login from '../pages/Login';
import Menu from '../pages/Menu';
import VariantMediaCrud from '../pages/VariantMediaCrud';
import VariantMediaForm from '../pages/VariantMediaCrud/Form';
import HomeRoutes from './HomeRoutes';
import PublicistRoutes from './PublicistRoutes';

const AppRouter = () => {
	const [ubication, setUbication] = useState({
		lng: 0,
		lat: 0
	});

	return (
		<div className='pattern__background'>
			<Routes>
				<Route path='/publicist-login' element={<Login />} />
				<Route
					path='/'
					element={
						<HomeRoutes ubication={ubication} setUbication={setUbication} />
					}
				>
					<Route index path='/' element={<Home />} />
					<Route path='/about-us' element={<About />} />
					<Route path='/contact-us' element={<ContactUs />} />
					<Route path='/menu' element={<Menu />} />
					<Route path='/work-with-us' element={<Employment />} />
					<Route
						path='/locations'
						element={<Locations ubication={ubication} />}
					/>
				</Route>
				<Route path='/publicist' element={<PublicistRoutes />}>
					<Route index path='/publicist/start' element={<CarouselCrud />} />
					<Route path='/publicist/carousel/new' element={<FormCarousel />} />
					<Route path='/publicist/gallery' element={<GalleryForm />} />
					<Route path='/publicist/media' element={<VariantMediaCrud />} />
					<Route path='/publicist/media/new' element={<VariantMediaForm />} />
				</Route>
			</Routes>
		</div>
	);
};

export default AppRouter;
