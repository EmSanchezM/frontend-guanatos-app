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
import GalleryCrud from '../pages/Publisher/GalleryCrud';
import GalleryForm from '../pages/Publisher/GalleryCrud/GalleryForm';
import MediaCrud from '../pages/Publisher/MediaCrud';
import MediaForm from '../pages/Publisher/MediaCrud/Form';

const AppRouter = () => {
	return (
		<div className='pattern__background'>
			<Routes>
				<Route path='/publisher-login' element={<Login />} />
				<Route path='/' element={<HomeLayout />}>
					<Route index path='/' element={<Home />} />
					<Route path='/about-us' element={<About />} />
					<Route path='/contact-us' element={<ContactUs />} />
					<Route path='/menu' element={<Menu />} />
					<Route path='/work-with-us' element={<Employment />} />
					<Route path='/locations' element={<Locations />} />
				</Route>
				<Route path='/publisher' element={<PublisherLayout />}>
					<Route index path='/publisher/carousel' element={<CarouselCrud />} />
					<Route path='/publisher/carousel/new' element={<FormCarousel />} />
					<Route path='/publisher/gallery' element={<GalleryCrud />} />
					<Route path='/publisher/gallery/new' element={<GalleryForm />} />
					<Route path='/publisher/media' element={<MediaCrud />} />
					<Route path='/publisher/media/new' element={<MediaForm />} />
				</Route>
			</Routes>
		</div>
	);
};

export default AppRouter;
