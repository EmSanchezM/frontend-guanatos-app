import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer';
import Dropdown from '../components/Navigation/Dropdown';
import Navbar from '../components/Navigation/Navbar';
import About from '../pages/About';
import ContactUs from '../pages/Contact';
import Home from '../pages/Home';

const HomeRouter = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [ubication, setUbication] = useState({
		lng: 0,
		lat: 0
	});

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			function (position) {
				setUbication({
					lng: position.coords.longitude,
					lat: position.coords.latitude
				});
			},
			function (error) {
				console.error('ERROR Code ' + error.code + ' - ' + error.message);
			},
			{
				enableHighAccuracy: true
			}
		);
	}, []);

	useEffect(() => {
		const hideMenu = () => {
			if (window.innerWidth > 768 && isOpen) {
				setIsOpen(false);
			}
		};

		window.addEventListener('resize', hideMenu);

		return () => {
			window.removeEventListener('resize', hideMenu);
		};
	});

	return (
		<div className='flex flex-col min-h-screen'>
			<Navbar toogle={toggle} ubication={ubication} />
			<Dropdown isOpen={isOpen} toggle={toggle} />
			<main className='flex-grow'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about-us' element={About} />
					<Route path='/contact-us' element={ContactUs} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
};

export default HomeRouter;
