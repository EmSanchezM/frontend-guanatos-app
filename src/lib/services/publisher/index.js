import { toast } from 'react-toastify';
import Axios from '../../Api/axios';

const postAllMedia = async media => {
	console.log('MEDIA FORM ', media);

	try {
		const response = await Axios.post('/media', media);
		const { data } = response;

		if (data.status === 'success') {
			toast.success('GALLERY ADDED SUCCESFULLY');
		}
	} catch (error) {
		console.log('ERROR ', error);
		const { message, request, response } = error;
		if (response) {
			const { data } = response;
			throw data;
		} else if (request) {
			throw request;
		} else {
			toast.error('ERROR ADDING GALLERY');
			throw message;
		}
	}
};

const postCarousel = async carousel => {
	try {
		const response = await Axios.post('/media', carousel);
		const { data } = response;

		if (data.status === 'success') {
			toast.success('SLIDE ADDED SUCCESFULLY');
		}
	} catch (error) {
		console.log('ERROR ', error);
		const { message, request, response } = error;
		if (response) {
			const { data } = response;
			throw data;
		} else if (request) {
			throw request;
		} else {
			toast.error('ERROR ADDING SLIDE');
			throw message;
		}
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
		const { message, request, response } = error;
		if (response) {
			const { data } = response;
			throw data;
		} else if (request) {
			throw request;
		} else {
			toast.error('ERROR ADDING APPLICATION');
			throw message;
		}
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
		const { message, request, response } = error;
		if (response) {
			const { data } = response;
			throw data;
		} else if (request) {
			throw request;
		} else {
			toast.error('ERROR IN CONTACT US SECTION');
			throw message;
		}
	}
};

const getAllMedia = async setMedia => {
	try {
		const response = await Axios.get('/media');
		const { data } = response;
		let media = [];

		if (data.status === 'success') {
			media = data.data.data;
			setMedia(media);
		}
	} catch (error) {
		const { message, request, response } = error;
		if (response) {
			const { data } = response;
			throw data;
		} else if (request) {
			throw request;
		} else {
			console.error(message);
			throw message;
		}
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
		const { message, request, response } = error;
		if (response) {
			const { data } = response;
			throw data;
		} else if (request) {
			throw request;
		} else {
			toast.error('ERROR DELETING FILE');
			throw message;
		}
	}
};

export {
	getAllMedia,
	postAllMedia,
	deleteMedia,
	postCarousel,
	postEmployment,
	postContactUs
};
