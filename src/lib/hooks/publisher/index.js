import { useEffect, useState } from 'react';
import { getAllMedia } from '../../services/publisher';

const getFilterMedia = media => {
	const multimedia = media.filter(
		mediaData => mediaData.section === 'multimedia'
	);

	const gallery = media.filter(mediaData => mediaData.section === 'gallery');

	const carousel = media.filter(mediaData => mediaData.section === 'carousel');

	return { multimedia, gallery, carousel };
};

export const useMultimedia = () => {
	const [media, setMedia] = useState([]);

	useEffect(() => {
		getAllMedia(setMedia);
	}, []);

	const { multimedia, gallery, carousel } = getFilterMedia(media);

	// setMedia lets callers refresh the list, e.g. after deleting an item
	return { multimedia, gallery, carousel, setMedia };
};
