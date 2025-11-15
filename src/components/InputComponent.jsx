export default function InputComponent({ required, type, placeholder, options }) {
	
	if (type === 'datalist') {
		return (
			<>
				<input
					type={type}
					placeholder={placeholder}
					className="t-links t-copy"
					list="myDatalist"
					required={required}
				/>
				<datalist className="t-links t-copy" id="myDatalist">
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
			/>
		);
	}
	
	return (
		<input
			type={type}
			placeholder={placeholder}
			className="t-links t-copy"
			required={required}
		/>
	);
}