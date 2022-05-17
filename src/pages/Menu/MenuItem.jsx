import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
/*ICONS*/
import { ShoppingCartIcon } from '../../components/Icons';

const MenuItem = ({ food }) => {
	return (
		<article className='card'>
			<motion.img
				className='card__img animate__animated animate__zoomIn'
				whileHover={{ scale: 0.9 }}
				transition={{ duration: 0.3 }}
				src={food.image}
				alt='food'
			/>
			<div>
				<h2 className='card__header mb-2'>{food.title}</h2>
				<div className='card__footer'>
					<motion.span className='card__btn' whileHover={{ scale: 1.1 }}>
						<ShoppingCartIcon className='w-5 h-5 text-red-600' />
						<span className='ml-2 font-bold text-gray-600'> Add to cart</span>
					</motion.span>
					<motion.span className='card__price' whileHover={{ scale: 1.1 }}>
						{food.price} $
					</motion.span>
				</div>
			</div>
		</article>
	);
};

export default MenuItem;

MenuItem.propTypes = {
	food: PropTypes.object.isRequired
};
