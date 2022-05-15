import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
/*STATICS FILES*/
import logo from '../../assets/logo/logo.png';
/*ICONS*/
import { FacebookIcon, InstagramIcon, TwitterIcon } from '../Icons';

const Footer = () => {
	const [t] = useTranslation('global');

	return (
		<footer className='footer'>
			<div className='footer__content'>
				<div className='footer__col'>
					<h4 className='footer__title'>Guanatos Tacos</h4>
					<hr />
					<img src={logo} alt='Guanatos Tacos' className='footer__img' />
				</div>
				<div className='footer__col'>
					<h4 className='footer__title'>Mision</h4>
					<hr />
					<p className='text-white'>{t('footer.footerMision')}</p>
				</div>
				<div className='footer__col'>
					<h4 className='footer__title'>Vision</h4>
					<hr />
					<p className='text-white'>{t('footer.footerVision')}</p>
				</div>
				<div className='footer__col'>
					<h4 className='footer__title'>{t('footer.footerLink')}</h4>
					<hr />
					<Link className='footer__link' to='/about-us'>
						{t('footer.footerL1')}
					</Link>
					<Link className='footer__link' to='/menu'>
						{t('footer.footerL2')}
					</Link>
					<Link className='footer__link' to='/locations'>
						{t('footer.footerL3')}
					</Link>
					<Link className='my-3 block text-white' to='/contact-us'>
						{t('footer.footerL4')}
					</Link>
					<Link className='my-3 block text-white' to='/publicist-login'>
						{t('footer.footerL5')}
					</Link>
					<a
						className='my-3 block text-white'
						target='_blank'
						rel='noreferrer'
						href='https://athoz-dev.azurewebsites.net'
					>
						{t('footer.footerL6')}
					</a>
				</div>
				<div className='footer__col'>
					<h4 className='footer__title'>{t('footer.footerSocial')}</h4>
					<hr />
					<div className='footer__icon'>
						<FacebookIcon className='w-8 h-8' />
					</div>
					<div className='footer__icon'>
						<InstagramIcon className='w-8 h-8' />
					</div>
					<div className='footer__icon'>
						<TwitterIcon className='w-8 h-8' />
					</div>
				</div>
			</div>
			<div className='footer__date'>
				<span className='mt-2'>
					&copy; {new Date().getFullYear()}. {t('footer.footerDerechos')}
				</span>
			</div>
		</footer>
	);
};

export default Footer;
