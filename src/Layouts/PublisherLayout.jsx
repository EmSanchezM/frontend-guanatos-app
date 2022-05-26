import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Navigation/Sidebar/Header';
import Sidebar from '../components/Navigation/Sidebar/Sidebar';

const Publisher = () => {
	const [showSidebar, setShowSidebar] = useState(false);

	const toggle = () => {
		setShowSidebar(!showSidebar);
	};

	useEffect(() => {
		const hideMenu = () => {
			if (window.innerWidth > 768 && showSidebar) {
				setShowSidebar(false);
			}
		};

		window.addEventListener('resize', hideMenu);

		return () => {
			window.removeEventListener('resize', hideMenu);
		};
	}, []);

	return (
		<div
			className={`flex h-screen bg-gray-50 font-primary ${
				showSidebar && 'overflow-hidden'
			}`}
		>
			<Sidebar
				showSidebar={showSidebar}
				setShowSidebar={setShowSidebar}
				toggle={toggle}
			/>
			<div className='flex flex-col flex-1 w-full'>
				<Header toggle={toggle} />
				<main className='h-full overflow-y-auto mx-2'>
					<div className='container my-4'>
						<Outlet />
					</div>
				</main>
			</div>
		</div>
	);
};

export default Publisher;
