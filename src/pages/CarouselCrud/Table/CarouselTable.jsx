import { useEffect, useState } from 'react';
import Loader from '../../../components/Loader';
import PublisherService from '../../../services/publisher';
import CarouselRow from './CarouselRow';

const CarouselTable = () => {
	const [allMedia, setAllMedia] = useState([]);

	useEffect(() => {
		PublisherService.getAllMedia(setAllMedia);
	}, []);

	let carousel;

	if (allMedia.length) {
		carousel = allMedia.map(media => (
			<CarouselRow key={allMedia._id} media={media} setAllMedia={setAllMedia} />
		));
	}

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
					{carousel ? (
						carousel
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

export default CarouselTable;
