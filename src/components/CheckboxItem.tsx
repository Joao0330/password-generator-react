export const CheckboxItem = ({ optionType }: { optionType: 'uppercase' | 'lowercase' | 'numbers' | 'symbols' }) => {
	const checkboxOptionsMap = {
		uppercase: 'Include Uppercase Letters',
		lowercase: 'Include Lowercase Letters',
		numbers: 'Include Numbers',
		symbols: 'Include Symbols',
	};

	return (
		<li>
			<label className='group flex items-center gap-4 cursor-pointer'>
				<input type='checkbox' className='hidden' />

				<div
					className='w-5 h-5 border-2 border-white flex items-center justify-center
                    xl:hover:border-green-200
               group-has-checked:bg-green-200
               group-has-checked:border-green-200 transition'
				>
					<svg width='14' height='12' xmlns='http://www.w3.org/2000/svg' className='opacity-0 group-has-checked:opacity-100 transition'>
						<path stroke='#18171F' strokeWidth='3' fill='none' d='M1 5.607 4.393 9l8-8' />
					</svg>
				</div>

				<span>{checkboxOptionsMap[optionType]}</span>
			</label>
		</li>
	);
};
