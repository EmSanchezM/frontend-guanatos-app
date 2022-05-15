import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';

const backdrop = {
	visible: { opacity: 1 },
	hidden: { opacity: 0 }
};

const modal = {
	hidden: {
		y: '-100vh',
		opacity: 0
	},
	visible: {
		y: '200px',
		opacity: 1,
		transition: { delay: 0.5 }
	}
};

const ModalAlert = ({ showModal, setShowModal }) => {
	return (
		<AnimatePresence exitBeforeEnter>
			{showModal && (
				<motion.div
					className='fixed top-0 left-0 w-full h-full z-1 bg-gray-400 bg-opacity-75 font-primary'
					variants={backdrop}
					initial='hidden'
					animate='visible'
					exit='hidden'
				>
					<motion.div
						className='max-w-md md:mx-auto mx-2 mt-0 m pt-10 pr-5 bg-white rounded-md text-center relative'
						variants={modal}
					>
						<h4 className='mb-4 font-bold'>Welcome to Guanatos Tacos</h4>
						<p className='font-bold'>Anuncios de Ofertas en esta seccion</p>
						<img
							className='max-w-full object-cover mx-2 py-2'
							src='https://images.unsplash.com/photo-1598515214146-dab39da1243d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1525&q=80'
							alt='ofert'
						/>
						<div
							className='text-xs uppercase border-2 border-primary-200 hover:border-primary-400 font-bold rounded-full px-4 py-2 absolute top-0 md:ml-96 ml-64 mt-2 cursor-pointer'
							onClick={() => setShowModal(false)}
						>
							<span>x</span>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default ModalAlert;

ModalAlert.propTypes = {
	showModal: PropTypes.bool.isRequired,
	setShowModal: PropTypes.func.isRequired
};
