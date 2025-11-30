export default function InputComponent({ required, type, placeholder, options, name, ...props}) {
	
	if (type === 'select') {
		return (
			<>
				<select
					name={name}
					placeholder={placeholder}
					className="t-links t-copy"
					required={required}
					{...props}
					defaultValue={placeholder}
				>
					<option disabled className='t-disabled'>{placeholder}</option>
					{options?.map((option, index) => (
						<option key={index} value={option}>
							{option}
						</option>
					))}
				</select>
			</>
		);
	}
	
	if (type === "textarea") {
		return (
			<textarea
				placeholder={placeholder}
				className="t-links t-copy"
				required={required}
				name={name}
				{...props}
			/>
		);
	}
	
	return (
		<input
			type={type}
			name={name}
			placeholder={placeholder}
			className="t-links t-copy"
			required={required}
			{...props}
		/>
	);
}