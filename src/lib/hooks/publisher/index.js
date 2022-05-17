import { useEffect, useState } from 'react';
import {
	getCarousel,
	getGallery,
	getMultimedia
} from '../../services/publisher';

export const useMultimedia = () => {
	const [media, setMedia] = useState([]);
	const [gallery, setGallery] = useState([]);
	const [carousel, setCarousel] = useState([]);

	useEffect(() => {
		getGallery(setGallery);
	}, []);

	useEffect(() => {
		getMultimedia(setMedia);
	}, []);

	useEffect(() => {
		getCarousel(setCarousel);
	}, []);

	return { media, gallery, carousel };
};
