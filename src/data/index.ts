import type { allowedCharsTypes, PasswordStrengthTypes } from '@/types';

// Data object for rendering the password strength bars
export const strengthConfig = {
	empty: { bars: 0, color: '', label: '' },
	veryWeak: { bars: 1, color: 'bg-red-500', label: 'very weak' },
	weak: { bars: 2, color: 'bg-orange-400', label: 'weak' },
	medium: { bars: 3, color: 'bg-yellow-300', label: 'medium' },
	strong: { bars: 4, color: 'bg-green-200', label: 'strong' },
};

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

// Helper function to calculate the strength of a password
export const calculateStrength = (password: string): PasswordStrengthTypes => {
	let score = 0;

	if (password.length >= 8) score++;
	if (password.length >= 12) score++;

	if (/[A-Z]/.test(password)) score++;
	if (/[0-9]/.test(password)) score++;
	if (/[^A-Za-z0-9]/.test(password)) score++;

	if (score === 0) return 'empty';
	if (score === 1) return 'veryWeak';
	if (score === 2) return 'weak';
	if (score === 3) return 'medium';
	return 'strong';
};
