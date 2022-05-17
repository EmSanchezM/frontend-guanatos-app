import { FoodData } from './FoodData';
import FoodItem from './FoodItem';

const PopularFood = () => {
	return (
		<article className='food__article'>
			<h3 className='food__title'>Our Popular Food</h3>

			<div className='food__grid'>
				{FoodData.map((food, index) => {
					return <FoodItem food={food} key={index} />;
				})}
			</div>
		</article>
	);
};

export default PopularFood;
