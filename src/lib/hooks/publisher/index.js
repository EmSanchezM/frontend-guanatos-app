import { useEffect, useState } from 'react';
import { getAllMedia, getCarousel } from '../../services/publisher';

export const useMultimedia = () => {
	const [media, setMedia] = useState([]);
	const [carousel, setCarousel] = useState([]);

	useEffect(() => {
		getAllMedia(setMedia);
	}, []);

	useEffect(() => {
		getCarousel(setCarousel);
	}, []);

	let multimedia = media?.filter(
		mediaData => mediaData.section === 'multimedia'
	);

	let gallery = media?.filter(mediaData => mediaData.section === 'gallery');

	return { media: multimedia, gallery, carousel };
};
