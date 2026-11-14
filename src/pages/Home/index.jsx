import { useState } from 'react';
import FloatingListButtons from '../../components/FloatingListButtons';
import GalleryImages from '../../components/GalleryImages';
import HeroSection from '../../components/Hero';
import Image from '../../components/Image';
import ModalAlert from '../../components/ModalAlert';
import MultimediaSection from '../../components/MultimediaSection';
import Video from '../../components/Video';
import { useMultimedia } from '../../lib/hooks/publisher';

const WELCOME_MODAL_SEEN_KEY = 'welcomeModalSeen';

const Home = () => {
	// Show the welcome modal once per browser; closing it marks it as seen
	const [showModal, setShowModal] = useState(
		() => !localStorage.getItem(WELCOME_MODAL_SEEN_KEY)
	);

	const closeModal = () => {
		localStorage.setItem(WELCOME_MODAL_SEEN_KEY, 'true');
		setShowModal(false);
	};
	const [selectedImg, setSelectedImg] = useState(null);
	const [selectedVideo, setSelectedVideo] = useState(null);

	const { gallery, multimedia, carousel } = useMultimedia();

	return (
		<>
			<HeroSection slides={carousel} showModal={showModal} />
			<FloatingListButtons showModal={showModal} />
			<ModalAlert showModal={showModal} setShowModal={closeModal} />
			<h4 className='text-2xl lg:text-4xl font-bold font-primary lg:mt-28 mx-2 my-4'>
				More Popular
			</h4>
			<MultimediaSection
				setSelectedVideo={setSelectedVideo}
				setSelectedImg={setSelectedImg}
				multimedia={multimedia}
			/>
			{selectedVideo && (
				<Video
					selectedVideo={selectedVideo}
					setSelectedVideo={setSelectedVideo}
				/>
			)}
			<h4 className='text-2xl lg:text-4xl font-bold font-primary mt-4 mx-2'>
				Gallery Images
			</h4>
			<GalleryImages setSelectedImg={setSelectedImg} gallery={gallery} />
			{selectedImg && (
				<Image selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
			)}
		</>
	);
};

export default Home;
