import { createContext, useContext } from 'react';

export const AppContext = createContext({
	appTitle: 'My Cool App'
});

export const useAppContext = () => useContext(AppContext);
