import logo from '../../../../assets/logo/logo.png';
import { DeleteIcon } from '../../../../components/Icons';
import { deleteMedia } from '../../../../lib/services/publisher';

const GalleryRow = ({ media, setGalleryMedia }) => {
	const handleDelete = media => {
		let confirm;
		confirm = window.confirm('Are you sure to delete it?');
		if (confirm) deleteMedia(media._id, setGalleryMedia);
	};

	return (
		<tr>
			<td className='px-5 py-5 border-gray-200'>
				<div className='flex justify-center items-center'>
					<img
						src={media.file ? media.file.url : logo}
						alt='logo'
						className='w-20 h-20 object-cover'
					/>
				</div>
			</td>
			<td className='px-5 py-5 border-gray-200 text-sm text-center capitalize'>
				{media.file.container}
			</td>
			<td className='px-5 py-5 border-gray-200 text-sm text-center capitalize'>
				{media.section}
			</td>
			<td className='px-5 py-5 border-gray-200 text-sm text-center'>
				<div className='flex justify-between items-center'>
					<button
						className='p-4 rounded-full bg-red-200 outline-none'
						onClick={() => handleDelete(media)}
					>
						<DeleteIcon className='w-5 h-5 text-primary-400 cursor-pointer' />
					</button>
				</div>
			</td>
		</tr>
	);
};

export default GalleryRow;
