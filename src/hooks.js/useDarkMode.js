import { useLocalStorage } from './useLocalStorage';
// import { useState } from 'react';

const useDarkMode = () => {
	const [darkValue, setDarkValue] = useLocalStorage('your key here')
}
export default useDarkMode;