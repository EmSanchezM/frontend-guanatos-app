import { toast } from 'react-toastify';
import Axios from '../../Api/axios';

const postMultimedia = async media => {
	console.log('MEDIA FORM ', media);

	try {
		const options = {
			data: media,
			method: 'POST'
		};

		const response = await Axios('/media', options);

		if (response.status === 'success') {
			toast.success('MULTIMEDIA ADDED SUCCESFULLY');
		}
	} catch (error) {
		console.log('ERROR ', error);
		let message;
		switch (error.status) {
			case 500:
				message = 'Internal Server Error';
				break;
			case 401:
				message = 'Invalid credentials';
				break;
			default:
				message = error.message;
				console.error(message);
				toast.error('ERROR ADDING GALLERY');
		}
	}
};

const postGallery = async gallery => {
	try {
		const options = {
			data: gallery,
			method: 'POST'
		};
		const response = await Axios('/media', options);

		if (response.status === 'success') {
			toast.success('GALLERY ADDED SUCCESFULLY');
		}
	} catch (error) {
		console.log('ERROR ', error);
		let message;
		switch (error.status) {
			case 500:
				message = 'Internal Server Error';
				break;
			case 401:
				message = 'Invalid credentials';
				break;
			default:
				message = error.message;
				console.error(message);
				toast.error('ERROR ADDING SLIDE');
		}
	}
};

const postCarousel = async carousel => {
	try {
		const options = {
			data: carousel,
			method: 'POST'
		};
		const response = await Axios('/media', options);

		if (response.status === 'success') {
			toast.success('SLIDE ADDED SUCCESFULLY');
		}
	} catch (error) {
		console.log('ERROR ', error);
		let message;
		switch (error.status) {
			case 500:
				message = 'Internal Server Error';
				break;
			case 401:
				message = 'Invalid credentials';
				break;
			default:
				message = error.message;
				console.error(message);
				toast.error('ERROR ADDING SLIDE');
		}
	}
};

const postEmployment = async employment => {
	try {
		console.log(employment);
		const options = {
			data: employment,
			method: 'POST'
		};

		const response = await Axios('/applicant', options);

		if (response.status === 'success') {
			toast.success('APPLICATION ADDED SUCCESFULLY');
		}
	} catch (error) {
		console.log('ERROR ', error);
		let message;
		switch (error.status) {
			case 500:
				message = 'Internal Server Error';
				break;
			case 401:
				message = 'Invalid credentials';
				break;
			default:
				message = error.message;
				console.error(message);
				toast.error('ERROR ADDING APPLICATION');
		}
	}
};

const postContactUs = async contact => {
	try {
		const options = {
			data: contact,
			method: 'POST'
		};
		const response = await Axios('/contact', options);

		if (response.status === 'success') {
			toast.success('WE WILL GET IN TOUCH WITH YOU');
		}
	} catch (error) {
		console.log('ERROR ', error);
		let message;
		switch (error.status) {
			case 500:
				message = 'Internal Server Error';
				break;
			case 401:
				message = 'Invalid credentials';
				break;
			default:
				message = error.message;
				console.error(message);
				toast.error('ERROR IN CONTACT US SECTION');
		}
	}
};

const getAllMedia = async setMedia => {
	try {
		const options = { method: 'GET' };
		const response = await Axios('/media', options);
		const { data } = response;

		if (response.status === 'success') {
			setMedia(data.data);
		}
	} catch (error) {
		let message;
		switch (error.status) {
			case 500:
				message = 'Internal Server Error';
				break;
			case 401:
				message = 'Invalid credentials';
				break;
			default:
				message = error.message;
				console.error('ERROR ALL MEDIA METHOD', message);
		}
	}
};

const deleteMedia = async (idMedia, setMedia) => {
	try {
		const options = { method: 'DELETE' };
		await Axios(`/media/${idMedia}`, options);

		await getAllMedia(setMedia);
		toast.success('FILE DELETED SUCCESSFULLY');
	} catch (error) {
		console.log('ERROR ', error);
		let message;
		switch (error.status) {
			case 500:
				message = 'Internal Server Error';
				break;
			case 401:
				message = 'Invalid credentials';
				break;
			default:
				message = error.message;
				console.error(message);
				toast.error('ERROR DELETING FILE');
		}
	}
};

export {
	deleteMedia,
	getAllMedia,
	postMultimedia,
	postGallery,
	postCarousel,
	postEmployment,
	postContactUs
};
