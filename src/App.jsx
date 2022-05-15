import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import global_en from './translations/en/global.json';
import global_es from './translations/es/global.json';

i18next.init({
	interpolation: { escapeValue: false },
	lng: 'en',
	resources: {
		es: {
			global: global_es
		},
		en: {
			global: global_en
		}
	}
});

function App() {
	return (
		<I18nextProvider i18n={i18next}>
			<div className='flex flex-row justify-center'>
				<p className='text-3xl font-bold underline'>Guanatos APP</p>
			</div>
		</I18nextProvider>
	);
}

export default App;
