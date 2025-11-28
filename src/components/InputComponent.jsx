export default function InputComponent({ required, type, placeholder, options, name, list}) {
	
	if (type === 'datalist') {
		return (
			<>
				<input
					type={type}
					name={name}
					placeholder={placeholder}
					className="t-links t-copy"
					list={list}
					required={required}
				/>
				<datalist className="t-links t-copy" id={list}>
					<option value="">{placeholder}</option>
					{options?.map((option, index) => (
						<option key={index} value={option}>
							{option}
						</option>
					))}
				</datalist>
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
		/>
	);
}