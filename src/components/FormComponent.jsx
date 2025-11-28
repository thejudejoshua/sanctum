import Button from "./Button.jsx";
import InputComponent from "./InputComponent.jsx";

import { useForm, ValidationError } from '@formspree/react';


export default function FormComponent({ input, submitLabel, icon, formKey, formMessage}) {
	
	// "mldypdvy" → your Formspree form ID
	const [state, handleSubmit] = useForm(formKey);
	
	// Success message (you can style this however you want)
	if (state.succeeded) {
		return (
			<p className="t-copy form-message-success">
				{formMessage}
			</p>
		);
	}
	
	
	return (
		<form className="form flex flex-col" onSubmit={handleSubmit}>
			<div className="form-input-holder flex flex-col">
				{input.map((field, index) => (
					<div key={index}>
						<InputComponent
							required={field.required}
							type={field.type}
							name={field.name}
							placeholder={field.placeholder}
							options={field.options}
							list={field.list || ''}
						/>
						
						{/* Display validation errors */}
						<p className={'t-error'}>
							<ValidationError
								prefix={field.name || field.type}
								field={field.name}
								errors={state.errors}
							/>
						</p>
					</div>
				))}
			</div>
			
			<Button label={submitLabel} direction="" hierarchy="primary" disabled={state.submitting}>
				{icon}
			</Button>
		</form>
	);
}