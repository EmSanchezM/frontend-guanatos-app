import { useEffect, useState } from 'react';
import { getAllMedia } from '../../../lib/services/publisher';
import CarouselRow from './CarouselRow';

const CarouselTable = () => {
	const [allMedia, setAllMedia] = useState([]);

	useEffect(() => {
		getAllMedia(setAllMedia);
	}, []);

	if (!allMedia.length)
		return <span className='flex justify-center'>No hay data</span>;

	return (
		<>
			<table className='table-fixed'>
				<thead className='border-2 border-primary-200'>
					<tr>
						<th className='w-1/3 px-5 py-3 border-gray-200'>Image</th>
						<th className='w-1/4 px-5 py-3 border-gray-200'>Title</th>
						<th className='w-1/4 px-5 py-3 border-gray-200'>Description</th>
						<th className='w-1/4 px-5 py-3 border-gray-200'>Badge</th>
						<th className='w-1/4 px-5 py-3 border-gray-200'>Actions</th>
					</tr>
				</thead>
				<tbody className='border-2 border-primary-200'>
					{allMedia.map(media => (
						<CarouselRow
							key={allMedia._id}
							media={media}
							setAllMedia={setAllMedia}
						/>
					))}
				</tbody>
			</table>
		</>
	);
};

export default CarouselTable;
