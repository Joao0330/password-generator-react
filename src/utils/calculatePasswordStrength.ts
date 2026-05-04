import type { PasswordStrengthTypes } from '@/types';

// Helper function to calculate the strength of a password
export const calculatePasswordStrength = (password: string): PasswordStrengthTypes => {
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
