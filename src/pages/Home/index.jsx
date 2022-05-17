import { useState } from 'react';
import FloatingButton from '../../components/FloatingButton';
import GalleryImages from '../../components/GalleryImages';
import HeroSection from '../../components/Hero';
import Image from '../../components/Image';
import ModalAlert from '../../components/ModalAlert';
import VariantSection from '../../components/VariantSection';
import Video from '../../components/Video';
import { useMultimedia } from '../../lib/hooks/publisher';
//import { SliderData } from '../../components/Hero/SliderData';

const Home = () => {
	const [showModal, setShowModal] = useState(false);
	const [selectedImg, setSelectedImg] = useState(null);
	const [selectedVideo, setSelectedVideo] = useState(null);

	const { gallery, media, carousel } = useMultimedia();

	console.log({ gallery, media });

	return (
		<>
			<HeroSection slides={carousel} showModal={showModal} />
			<FloatingButton showModal={showModal} />
			<ModalAlert showModal={showModal} setShowModal={setShowModal} />
			<h4 className='text-2xl lg:text-4xl font-bold font-primary lg:mt-28 mx-2 my-4'>
				More Popular
			</h4>
			<VariantSection
				setSelectedVideo={setSelectedVideo}
				setSelectedImg={setSelectedImg}
				allMedia={gallery}
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
			<GalleryImages setSelectedImg={setSelectedImg} allMedia={media} />
			{selectedImg && (
				<Image selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
			)}
		</>
	);
};

export default Home;
