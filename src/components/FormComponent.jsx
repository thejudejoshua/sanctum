import Button from "./Button.jsx";
import InputComponent from "./InputComponent.jsx";

export default function FormComponent({ input, submitLabel, icon }) {
	
	// const [formData, setFormData] = useState({
	// 	companyName: '',
	// 	founderName: '',
	// 	email: '',
	// 	industry: '',
	// 	description: '',
	// 	fundingNeeded: '',
	// 	website: ''
	// });
	
	return (
		<form className="form flex flex-col">
			<div className="form-input-holder flex flex-col">
				{input.map((field, index) => {
					return (
						<InputComponent required={field.required} key={index} type={field.type} placeholder={field.placeholder} options={field.options}/>
					)
				})}
			</div>
			
			<Button label={submitLabel} direction="" hierarchy="primary">
				{icon}
			</Button>
		</form>
	);
}