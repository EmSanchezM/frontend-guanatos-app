import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Dropdown from '../components/Navigation/Dropdown';
import Navbar from '../components/Navigation/Navbar';
import { useUbication } from '../lib/hooks/ubication';

const HomeRoutes = () => {
	const [isOpen, setIsOpen] = useState(false);

	const { ubication } = useUbication();

	const toggle = () => {
		setIsOpen(!isOpen);
	};

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
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default HomeRoutes;
