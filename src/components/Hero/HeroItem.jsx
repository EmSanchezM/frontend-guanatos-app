import HeroDisplay from './HeroDisplay';

const HeroItem = ({ slide, index }) => (
	<div key={index}>
		{index === current && (
			<section className='hero__section'>
				<div>
					<HeroDisplay slide={slide} />
				</div>
				<div className='mt-4 md:px-2 lg:w-1/3'>
					<span className='hero__shortMessage'>{slide.badge}</span>
					<h1 className='hero__title'>{slide.title}</h1>
					<p className='hero__paragraph'>{slide.description}</p>
				</div>
			</section>
		)}
	</div>
);

export default HeroItem;
