import { useTranslation } from 'react-i18next';

const About = () => {
	const [t] = useTranslation('global');

	return (
		<section className='font-primary'>
			<div className='contact__header'>
				<div className='contact__container'>
					<div className='mx-4 text-center'>
						<h1 className='contact__title'>About Us</h1>
					</div>
				</div>
			</div>
			<div className='flex flex-col md:flex-row md:px-4 md:mb-2'>
				<div className='contact__grid'>
					<div className='contact__card'>
						<h2 className='contact-card__title'>
							{t('aboutPage.misionTitle')}
						</h2>
						<p className='contact-card__content'>
							{t('aboutPage.misionParrafo')}
						</p>
						<div className='contact-card__icon'>Taco Icon</div>
					</div>
					<div className='contact__card'>
						<h2 className='contact-card__title'>
							{t('aboutPage.visionTitle')}
						</h2>
						<p className='contact-card__content'>
							{t('aboutPage.visionParrafo')}
						</p>
						<div className='px-2 h-20 w-20'>
							<TacoIcon />
						</div>
					</div>
				</div>
			</div>

			<div className='lg:mx-2 px-4'>
				<h2 className='font-bold text-xl lg:text-6xl text-center mb-2'>
					{' '}
					{t('aboutPage.historyTitle')}
				</h2>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
					quas consequuntur accusamus dolorum consequatur veritatis expedita,
					corporis fuga dolor distinctio, necessitatibus itaque impedit maiores
					iste quo qui repellendus laudantium? Unde!
				</p>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
					quas consequuntur accusamus dolorum consequatur veritatis expedita,
					corporis fuga dolor distinctio, necessitatibus itaque impedit maiores
					iste quo qui repellendus laudantium? Unde!
				</p>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
					quas consequuntur accusamus dolorum consequatur veritatis expedita,
					corporis fuga dolor distinctio, necessitatibus itaque impedit maiores
					iste quo qui repellendus laudantium? Unde!
				</p>
			</div>
		</section>
	);
};

export default About;
