import { useState } from 'react';
import { CheckboxItem } from './components/CheckboxItem';
import type { allowedCharsTypes } from './types';

function App() {
	const [passwordLength, setPasswordLength] = useState(0);
	const [passwordOptions, setPasswordOptions] = useState({
		uppercase: false,
		lowercase: false,
		numbers: false,
		symbols: false,
	});
	const [password, setPassword] = useState('');

	const getPasswordChars = (options: allowedCharsTypes) => {
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

	const generateRandomPassword = () => {
		const characterPool = getPasswordChars(passwordOptions);

		if (!characterPool) return;
		if (passwordLength <= 0) return;

		let generated = '';

		for (let i = 0; i < passwordLength; i++) {
			const randomIndex = Math.floor(Math.random() * characterPool.length);
			generated += characterPool[randomIndex];
		}

		setPassword(generated);
	};

	return (
		<>
			<main className='min-h-dvh px-4 pt-16.25 pb-15.75 md:flex md:items-center md:justify-center md:pt-33.25 md:pb-48.75'>
				<section className='flex flex-col gap-4 md:w-135'>
					<h1 className='text-preset4 text-grey-600 text-center md:text-preset2'>Password Generator</h1>

					<div className='p-4 bg-grey-800 flex items-center justify-between overflow-hidden md:py-4 md:px-8'>
						<span className='text-preset2 text-grey-700 md:text-preset1'>{password === '' ? 'P4$5W0rD!' : password}</span>

						<div className='flex items-center gap-2 md:gap-4'>
							<span className='text-preset4 text-green-200 uppercase  md:text-preset3'>copied</span>

							<button className='copyBtn'>
								<svg width='21' height='24' xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z'
										fill='#A4FFAF'
									/>
								</svg>
							</button>
						</div>
					</div>

					<div className='p-4 bg-grey-800 flex flex-col gap-8 md:py-6 md:px-8'>
						<div className='flex flex-col gap-2 md:gap-4'>
							<div className='flex justify-between items-center'>
								<p className='text-preset4 text-white md:text-preset3'>Character Length</p>
								<span className='text-preset2 text-green-200 md:text-preset1'>{passwordLength}</span>
							</div>

							<input type='range' min='0' max='50' className='appearance-none cursor-pointer bg-grey-850 h-2' value={passwordLength} onChange={e => setPasswordLength(Number(e.target.value))} />
						</div>

						<ul className='flex flex-col gap-4 text-white text-preset4'>
							<CheckboxItem optionType='uppercase' setPasswordOptions={setPasswordOptions} />
							<CheckboxItem optionType='lowercase' setPasswordOptions={setPasswordOptions} />
							<CheckboxItem optionType='numbers' setPasswordOptions={setPasswordOptions} />
							<CheckboxItem optionType='symbols' setPasswordOptions={setPasswordOptions} />
						</ul>

						<div className='py-3.5 px-4 bg-grey-850 flex items-center justify-between md:py-6 md:px-8'>
							<p className='text-preset4 uppercase text-grey-600'>strength</p>

							<div className='passwordStrengthBars'>
								<span>medium</span>

								<div>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
								</div>
							</div>
						</div>

						<button type='button' className='generateBtn' onClick={generateRandomPassword}>
							<span>generate</span>
							<svg width='12' height='12' xmlns='http://www.w3.org/2000/svg'>
								<path fill='#24232C' d='m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z' />
							</svg>
						</button>
					</div>
				</section>
			</main>
			<footer className='footer'>
				<p>Coded by</p>
				<a href='https://joaogrodrigues.dev' target='_blank' rel='noopener noreferrer' aria-label='João Rodrigues portfolio (opens in a new tab)'>
					João Rodrigues
				</a>
			</footer>
		</>
	);
}

export default App;
