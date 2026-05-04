import type { allowedCharsTypes } from '@/types';

// Helper function for getting the password characters
export const getPasswordChars = (options: allowedCharsTypes) => {
	let passwordChars = '';

	if (options.uppercase) {
		passwordChars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	}

	if (options.lowercase) {
		passwordChars += 'abcdefghijklmnopqrstuvwxyz';
	}

	if (options.numbers) {
		passwordChars += '0123456789';
	}

	if (options.symbols) {
		passwordChars += '!@#$%^&*()_+[]{}<>?';
	}

	return passwordChars;
};
