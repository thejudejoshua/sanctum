export default function InputComponent({type}) {
	return (
		<input
			type={type}
			placeholder={`Enter your ${type}...`}
			className="t-links bg-transparent t-copy"
		/>
	)
}