import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PlusIcon } from '../../../components/Icons';
import MediaTable from './Table/MediaTable';

const MediaCrud = () => {
	return (
		<>
			<div className='flex justify-between items-center border-2 border-primary-200 h-16 px-2'>
				<h2 className='font-bold'>MultiMedia Section</h2>
				<Link
					to='/publisher/media/new'
					className='flex items-center lg:mr-4 px-4 py-2 border-2 border-primary-200 rounded-sm'
				>
					<PlusIcon className='w-5 h-5 text-primary-200' />
					<span className='font-bold hidden '>Add Video or Images Files</span>
				</Link>
			</div>
			<ToastContainer autoClose={3000} />
			<div className='my-2 overflow-x-auto lg:overflow-hidden'>
				<MediaTable />
			</div>
		</>
	);
};

export default MediaCrud;
