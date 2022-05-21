import { useState } from 'react';

export const useLanguage = i18n => {
	const languageStorage = localStorage.getItem('language') || 'EN';

	const [language, setLanguage] = useState(languageStorage);

	const handleLanguage = () => {
		if (language === 'EN') {
			setLanguage('ESP');
			i18n.changeLanguage('es');
			localStorage.setItem('language', language);
		} else {
			setLanguage('EN');
			i18n.changeLanguage('en');
			localStorage.setItem('language', language);
		}
	};

	return {
		language,
		handleLanguage
	};
};
