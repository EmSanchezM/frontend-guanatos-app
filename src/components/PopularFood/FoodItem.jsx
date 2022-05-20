import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { ShoppingCartIcon } from '../../components/Icons';

const FoodItem = ({ food }) => (
	<article className='card'>
		<motion.img
			className='card__img'
			whileHover={{ scale: 0.9 }}
			transition={{ duration: 0.3 }}
			src={food.image}
			alt='food'
		/>
		<div>
			<h2 className='card__header'>{food.title}</h2>
			<p className='card__text'>{food.description}</p>
			<div className='card__footer'>
				<motion.span whileHover={{ scale: 1.1 }} className='card__btn'>
					<ShoppingCartIcon className='w-5 h-5 text-primary-400' />
					<span className='ml-2 font-bold text-gray-600'> Add to cart</span>
				</motion.span>
				<motion.span className='card__price' whileHover={{ scale: 1.1 }}>
					{food.price} $
				</motion.span>
			</div>
		</div>
	</article>
);

export default FoodItem;

FoodItem.propTypes = {
	food: PropTypes.object.isRequired
};
