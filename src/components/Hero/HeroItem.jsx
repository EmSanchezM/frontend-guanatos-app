import HeroDisplay from './HeroDisplay';

const HeroItem = ({ slide, index, current }) => (
	<div key={index}>
		{index === current && (
			<section className='hero__section'>
				<div className='mx-5 mt-2 md:mt-0 lg:mt-0'>
					<HeroDisplay slide={slide} />
				</div>
			</section>
		)}
	</div>
);

export default HeroItem;
