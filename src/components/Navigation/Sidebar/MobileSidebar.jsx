import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MenuBarIcon } from '../../Icons';

const backdrop = {
	visible: { opacity: 1 },
	hidden: { opacity: 0 }
};

const sidebar = {
	hidden: {
		x: '-100vh',
		opacity: 0
	},
	visible: {
		x: 0,
		opacity: 1,
		transition: { delay: 0.5 }
	}
};

const MobileSidebar = ({ showSidebar, setShowSidebar }) => {
	return (
		<AnimatePresence exitBeforeEnter>
			{showSidebar && (
				<motion.div
					className='fixed top-0 left-0 w-2/3 h-screen z-1 font-primary'
					variants={backdrop}
					initial='hidden'
					animate='visible'
					exit='hidden'
				>
					<motion.div
						className='max-w-md h-screen mx-0 lg:mx-auto sm:mx-1 pt-10 sm:pr-5 bg-white rounded-md text-center relative'
						variants={sidebar}
					>
						<div>
							<h2 className='mb-6 mt-6 mx-1 font-bold'>Guanatos Admin</h2>
							<div
								className='text-xs uppercase border-2 border-primary-200 hover:border-primary-400 font-bold rounded-full px-4 py-2 absolute top-0 ml-24 sm:ml-44 md:ml-80 lg:ml-72 mt-4 cursor-pointer'
								onClick={() => setShowSidebar(false)}
							>
								<span>
									<MenuBarIcon className='w-5 h-5' />
								</span>
							</div>
						</div>
						<div className='flex flex-col justify-evenly'>
							<Link
								to='/publisher/carousel'
								className='rounded-xl sm:px-20 sm:py-2 px-14 py-2 sm:mx-4 mx-2 border-2 border-primary-200 mb-4 font-bold hover:border-primary-400'
							>
								Carousel
							</Link>

							{/*<Link 
                                to='/publisher/card-food'
                                className='rounded-xl sm:px-20 sm:py-2 px-14 py-2 sm:mx-4 mx-2 border-2 border-primary-200 mb-4 font-bold hover:border-primary-400'
                            >
                               Popular Food
                            </Link>
                            <Link 
                                to='/publisher/advertisements'
                                className='rounded-xl sm:px-20 sm:py-2 px-14 py-2 sm:mx-4 mx-2 border-2 border-primary-200 mb-4 font-bold hover:border-primary-400'
                            >
                                Advertisements
                            </Link>*/}
							<Link
								to='/publisher/gallery'
								className='rounded-xl sm:px-20 sm:py-2 px-14 py-2 sm:mx-4 mx-2 border-2 border-primary-200 mb-4 font-bold hover:border-primary-400'
							>
								Gallery Images
							</Link>
							<Link
								to='/publisher/media'
								className='rounded-xl sm:px-20 sm:py-2 px-14 py-2 sm:mx-4 mx-2 border-2 border-primary-200 mb-4 font-bold hover:border-primary-400'
							>
								Section Media
							</Link>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default MobileSidebar;

MobileSidebar.propTypes = {
	showSidebar: PropTypes.bool.isRequired,
	setShowSidebar: PropTypes.func.isRequired
};
