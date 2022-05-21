import { useEffect, useState } from 'react';
import { getAllMedia } from '../../services/publisher';

const getFilterMedia = media => {
	let multimedia = media.filter(
		mediaData => mediaData.section === 'multimedia'
	);

	let gallery = media.filter(mediaData => mediaData.section === 'gallery');

	let carousel = media.filter(mediaData => mediaData.section === 'carousel');

	return { multimedia, gallery, carousel };
};

export const useMultimedia = () => {
	const [media, setMedia] = useState([]);

	useEffect(() => {
		getAllMedia(setMedia);
	}, []);

	const { multimedia, gallery, carousel } = getFilterMedia(media);

	return { multimedia, gallery, carousel };
};
