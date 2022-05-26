import { Route, Routes } from 'react-router-dom';
import HomeLayout from '../Layouts/HomeLayout';
import PublisherLayout from '../Layouts/PublisherLayout';
import About from '../pages/About';
import ContactUs from '../pages/Contact';
import Employment from '../pages/Employment';
import Home from '../pages/Home';
import Locations from '../pages/Locations';
import Login from '../pages/Login';
import Menu from '../pages/Menu';
import CarouselCrud from '../pages/Publisher/CarouselCrud';
import FormCarousel from '../pages/Publisher/CarouselCrud/Form';
import GalleryForm from '../pages/Publisher/GalleryCrud/GalleryForm';
import MediaCrud from '../pages/Publisher/MediaCrud';
import MediaForm from '../pages/Publisher/MediaCrud/Form';

const AppRouter = () => {
	return (
		<div className='pattern__background'>
			<Routes>
				<Route path='/publicist-login' element={<Login />} />
				<Route path='/' element={<HomeLayout />}>
					<Route index path='/' element={<Home />} />
					<Route path='/about-us' element={<About />} />
					<Route path='/contact-us' element={<ContactUs />} />
					<Route path='/menu' element={<Menu />} />
					<Route path='/work-with-us' element={<Employment />} />
					<Route path='/locations' element={<Locations />} />
				</Route>
				<Route path='/publicist' element={<PublisherLayout />}>
					<Route index path='/publicist/start' element={<CarouselCrud />} />
					<Route path='/publicist/carousel/new' element={<FormCarousel />} />
					<Route path='/publicist/gallery' element={<GalleryForm />} />
					<Route path='/publicist/media' element={<MediaCrud />} />
					<Route path='/publicist/media/new' element={<MediaForm />} />
				</Route>
			</Routes>
		</div>
	);
};

export default AppRouter;
