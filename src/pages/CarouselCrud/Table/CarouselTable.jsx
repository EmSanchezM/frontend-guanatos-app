import { useMultimedia } from '../../../lib/hooks/publisher';
import CarouselRow from './CarouselRow';

const CarouselTable = () => {
	const { carousel } = useMultimedia();

	if (!carousel.length)
		return (
			<span className='flex justify-center font-bold'>There are no data</span>
		);

	return (
		<>
			<table className='table-fixed'>
				<thead className='border-2 border-primary-200'>
					<tr>
						<th className='w-1/3 px-5 py-3 border-gray-200'>Image</th>
						<th className='w-1/3 px-5 py-3 border-gray-200'>Title</th>
						<th className='w-1/3 px-5 py-3 border-gray-200'>Section</th>
						<th className='w-1/3 px-5 py-3 border-gray-200'>Actions</th>
					</tr>
				</thead>
				<tbody className='border-2 border-primary-200'>
					{carousel.map(media => (
						<CarouselRow key={media._id} media={media} />
					))}
				</tbody>
			</table>
		</>
	);
};

export default CarouselTable;
