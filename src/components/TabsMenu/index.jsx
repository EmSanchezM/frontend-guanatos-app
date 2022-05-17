import PropTypes from 'prop-types';
import { useState } from 'react';

const menuFood = [
	{
		_id: 'xssdsds',
		name: 'All Menu'
	},
	{
		_id: 'xssdsdasa12s',
		name: 'Drinks'
	},
	{
		_id: 'xssdsds1467',
		name: 'Hamburger'
	},
	{
		_id: 'xssdsds14b67',
		name: 'Burritos'
	},
	{
		_id: 'xssds34t6',
		name: 'Tacos'
	},
	{
		_id: 'xssfds34t6',
		name: 'Mole'
	}
];

const TabsMenu = ({ setSearch }) => {
	const [active, setActive] = useState(0);

	const updateMenu = (index, term) => {
		setActive(index);
		setSearch(term);
	};

	return (
		<div className='shadow-md mt-2 bg-gray-400 rounded-lg p-2'>
			<div className='flex max-h-12 overflow-x-auto px-2'>
				{menuFood.map((food, index) => {
					return (
						<div
							key={food._id}
							onClick={() => updateMenu(index, food.name)}
							className={`${
								active === index ? 'rounded-full bg-yellow-400' : 'bg-gray-400'
							} flex items-center h-12 rounded-full mr-2 px-2 font-bold text-white`}
						>
							{food.name}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default TabsMenu;

TabsMenu.propTypes = {
	setSearch: PropTypes.func.isRequired
};
