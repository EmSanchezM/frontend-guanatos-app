import { useEffect, useState } from 'react';
import Loader from '../../../components/Loader';
import { getAllMedia } from '../../../lib/services/publisher';
import MediaRow from './MediaRow';

const MediaTable = () => {
	const [allMedia, setAllMedia] = useState([]);

	useEffect(() => {
		getAllMedia(setAllMedia);
	}, []);

	let gallerys;

	if (allMedia.length) {
		gallerys = allMedia.map(media => (
			<MediaRow key={allMedia._id} media={media} setAllMedia={setAllMedia} />
		));
	}

	return (
		<>
			<table className='table-fixed'>
				<thead className='border-2 border-primary-200'>
					<tr>
						<th className='w-1/3 px-5 py-3 border-gray-200'>Image</th>
						<th className='w-1/3 px-5 py-3 border-gray-200'>Rol</th>
						<th className='w-1/3 px-5 py-3 border-gray-200'>Section</th>
						<th className='w-1/3 px-5 py-3 border-gray-200'>Actions</th>
					</tr>
				</thead>
				<tbody className='border-2 border-primary-200'>
					{gallerys ? (
						gallerys
					) : (
						<span className='text-center'>
							<Loader className='w-5 h-5' />
						</span>
					)}
				</tbody>
			</table>
		</>
	);
};

export default MediaTable;
