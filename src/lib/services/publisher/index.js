import { toast } from 'react-toastify';
import Axios from '../../Api/axios';

const postAllMedia = async media => {
	console.log('MEDIA FORM ', media);

	try {
		const options = {
			data: media,
			method: 'POST'
		};

		const response = await Axios('/media', options);
		const { data } = response;

		if (data.status === 'success') {
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
				toast.error('ERROR ADDING GALLERY');
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
		const { data } = response;

		if (data.status === 'success') {
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
		const options = {
			data: employment,
			method: 'POST'
		};

		const response = await Axios('/applicant', options);
		const { data } = response;

		if (data.status === 'success') {
			console.log(data.status);
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
		const { data } = response;

		if (data.status === 'success') {
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

		if (data.status === 'success') {
			setMedia(data.data);
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
				console.error('ERROR ALL MEDIA METHOD', message);
		}
	}
};

const deleteMedia = async (idMedia, setMedia) => {
	try {
		const options = { method: 'DELETE' };
		const response = await Axios(`/media/${idMedia}`, options);
		const { data } = response;

		if (data.status === 'success') {
			await getAllMedia(setMedia);
			toast.success('FILE DELETED SUCCESSFULLY');
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
				toast.error('ERROR DELETING FILE');
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
