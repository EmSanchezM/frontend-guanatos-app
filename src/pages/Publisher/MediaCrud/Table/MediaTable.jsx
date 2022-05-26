import { useState } from 'react';
import { useMultimedia } from '../../../../lib/hooks/publisher';
import MediaRow from './MediaRow';

const MediaTable = () => {
	const { multimedia } = useMultimedia();

	const [allMultimedia, setAllMultimedia] = useState(multimedia);

	if (!allMultimedia.length)
		return <p className='flex justify-center font-bold'>There are not data</p>;

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
					{allMultimedia.map(media => (
						<MediaRow
							key={media._id}
							media={media}
							setAllMultimedia={setAllMultimedia}
						/>
					))}
				</tbody>
			</table>
		</>
	);
};

export default MediaTable;
