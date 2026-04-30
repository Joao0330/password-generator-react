export type OptionsTypes = 'uppercase' | 'lowercase' | 'numbers' | 'symbols';

export type allowedCharsTypes = Record<OptionsTypes, boolean>;

export type PasswordStrengthTypes = 'empty' | 'veryWeak' | 'weak' | 'medium' | 'strong';
