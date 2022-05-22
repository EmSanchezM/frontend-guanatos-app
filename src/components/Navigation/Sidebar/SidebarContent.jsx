import { Link } from 'react-router-dom';
import { PhotoIcon } from '../../Icons';

const SidebarContent = () => {
	return (
		<div className='py-4 text-gray-500'>
			<div className='flex'>
				<span className='ml-6 mr-4 text-lg font-bold'>GUANATOS ADMIN</span>
			</div>
			<div className='flex flex-col mt-6'>
				<Link
					to='/publicist/start'
					className='flex items-center px-6 py-3 text-gray-400 hover:text-purple-600'
				>
					<PhotoIcon className='w-5 h-5 bg-gray-100 mr-2' />
					Carousel
				</Link>
				{/*<Link 
                    to='/publicist/card-food'
                    className="flex items-center px-6 py-3 text-gray-400 hover:text-purple-600"  
                >
                    <PhotoIcon className='w-5 h-5 bg-gray-100 mr-2' />
                    Popular Food  
                </Link>*/}
				<Link
					to='/publicist/gallery'
					className='flex items-center px-6 py-3 text-gray-400 hover:text-purple-600'
				>
					<PhotoIcon className='w-5 h-5 bg-gray-100 mr-2' />
					Gallery Images
				</Link>
				<Link
					to='/publicist/media'
					className='flex items-center px-6 py-3 text-gray-400 hover:text-purple-600'
				>
					<PhotoIcon className='w-5 h-5 bg-gray-100 mr-2' />
					Section Media
				</Link>
			</div>
		</div>
	);
};

export default SidebarContent;
