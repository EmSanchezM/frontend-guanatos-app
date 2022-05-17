import { useState } from 'react';

import TabsMenu from '../../components/TabsMenu';
import MenuItem from './MenuItem';
import { FoodData } from '../../components/PopularFood/FoodData';

const Menu = () => {
  
  const [ search, setSearch ] = useState('');
  
  return (
    <section className='flex flex-col'>
      <h2 className='font-bold uppercase text-xl text-center mt-2 text-gray-700'>Our special menu</h2>
      <TabsMenu setSearch={setSearch} />
      <div className='mb-2'>
        {search}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 px-2'>
        {
          FoodData.map((food, index) => {
            return (
              <MenuItem food={food} key={index} />
            )
          })
        }
      </div>
    </section>
  )
}

export default Menu
