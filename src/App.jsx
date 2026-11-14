import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import AuthState from './lib/context/auth/authState';
import AppRouter from './routes/AppRouter';
import globalEn from './translations/en/global.json';
import globalEs from './translations/es/global.json';

i18next.init({
	interpolation: { escapeValue: false },
	lng: 'en',
	resources: {
		es: {
			global: globalEs
		},
		en: {
			global: globalEn
		}
	}
});

function App() {
	return (
		<I18nextProvider i18n={i18next}>
			<AuthState>
				<AppRouter />
			</AuthState>
		</I18nextProvider>
	);
}

export default App;
