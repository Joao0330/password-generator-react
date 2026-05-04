import type { allowedCharsTypes } from '@/types';
import { getPasswordChars } from './getPasswordChars';

export const generateRandomPassword = (passwordOptions: allowedCharsTypes, passwordLength: number) => {
	const characterPool = getPasswordChars(passwordOptions);

	if (!characterPool) return;
	if (passwordLength <= 0) return;

	let generated = '';

	for (let i = 0; i < passwordLength; i++) {
		const randomIndex = Math.floor(Math.random() * characterPool.length);
		generated += characterPool[randomIndex];
	}

	return generated;
};
