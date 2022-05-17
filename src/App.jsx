import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import AppRouter from './routes/appRouter';
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
			<AppRouter />
		</I18nextProvider>
	);
}

export default App;
