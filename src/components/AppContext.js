import { createContext, useContext } from 'react';

export const AppContext = createContext({
	appTitle: 'My Cool App',
	pageTitle: 'Dashboard',
	params: {}
});

export const useAppContext = () => useContext(AppContext);
