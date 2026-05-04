export const copyToClipboard = (password: string) => {
	if (!password) return;
	navigator.clipboard.writeText(password);
};
