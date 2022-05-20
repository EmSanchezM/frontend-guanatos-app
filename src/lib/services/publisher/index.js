import { toast } from 'react-toastify';
import Axios from '../../Api/axios';

const postAllMedia = async (media, setMedia, navigate, path) => {
	console.log('MEDIA FORM ', media);

	try {
		const response = await Axios.post('/media', media);
		const { data } = response;

		if (data.status === 'success') {
			console.log(data.status);
			await getAllMedia(setMedia);
			navigate(path);
			toast.success('GALLERY ADDED SUCCESFULLY');
		}
	} catch (error) {
		console.log('ERROR ', error);
		toast.error('ERROR ADDING GALLERY');
	}
};

const postCarousel = async carousel => {
	try {
		const response = await Axios.post('/carousel', carousel);
		const { data } = response;

		if (data.status === 'success') {
			console.log(data.status);
			toast.success('SLIDE ADDED SUCCESFULLY');
		}
	} catch (error) {
		console.log('ERROR ', error);
		toast.error('ERROR ADDING SLIDE');
	}
};

const postEmployment = async employment => {
	try {
		const response = await Axios.post('/employment', employment);
		const { data } = response;

		if (data.status === 'success') {
			console.log(data.status);
			toast.success('APPLICATION ADDED SUCCESFULLY');
		}
	} catch (error) {
		console.log('ERROR ', error);
		toast.error('ERROR ADDING APPLICATION');
	}
};

const postContactUs = async contact => {
	try {
		const response = await Axios.post('/contact', contact);
		const { data } = response;

		if (data.status === 'success') {
			console.log(data.status);
			toast.success('WE WILL GET IN TOUCH WITH YOU');
		}
	} catch (error) {
		console.log('ERROR ', error);
		toast.error('ERROR IN CONTACT US SECTION');
	}
};

const getCarousel = async setCarousel => {
	try {
		const response = await Axios.get('/carousel');
		const { data } = response;

		if (data.status === 'success') {
			setCarousel(data.data.data);
		}
	} catch (error) {
		console.log('ERROR ', error);
	}
};

const getGallery = async setGallery => {
	try {
		const response = await Axios.get('/media');
		const { data } = response;

		if (data.status === 'success') {
			console.log('data axios ', data.data.data);
			let Media = data.data.data;
			let galleryFilter = Media?.filter(media => media.section === 'gallery');

			setGallery(galleryFilter);
		}
	} catch (error) {
		console.log('ERROR ', error);
	}
};

const getAllMedia = async setMedia => {
	try {
		const response = await Axios.get('/media');
		const { data } = response;

		if (data.status === 'success') {
			console.log('data axios ', data.data.data);
			let Media = data.data.data;

			setMedia(Media);
		}
	} catch (error) {
		console.log('ERROR ', error);
	}
};
const getMultimedia = async setMedia => {
	try {
		const response = await Axios.get('/media');
		const { data } = response;

		if (data.status === 'success') {
			console.log('data axios ', data.data.data);
			let Media = data.data.data;
			let variantFilter = Media?.filter(
				media => media.section === 'multimedia'
			);

			setMedia(variantFilter);
		}
	} catch (error) {
		console.log('ERROR ', error);
	}
};

const deleteMedia = async (idMedia, setMedia) => {
	try {
		const response = await Axios.delete(`/media/${idMedia}`);
		const { data } = response;

		if (data.status === 'success') {
			await getAllMedia(setMedia);
			toast.success('FILE DELETED SUCCESSFULLY');
		}
	} catch (error) {
		console.log('ERROR ', error);
		toast.error('ERROR DELETING FILE');
	}
};

export {
	getCarousel,
	getGallery,
	getMultimedia,
	getAllMedia,
	postAllMedia,
	deleteMedia,
	postCarousel,
	postEmployment,
	postContactUs
};
