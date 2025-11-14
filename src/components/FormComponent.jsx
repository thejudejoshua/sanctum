import Button from "./Button.jsx";
import InputComponent from "./InputComponent.jsx";

export default function FormComponent ({input, submitLabel, icon}){
	
	return(
		
		<form className="form flex flex-col justify-start items-start">
			{/* Generate Inputs */}
			{input.map((type, index) => (
				<div
					key={index}
					className="form-input-holder"
				>
					<InputComponent type={input}/>
				</div>
			))}
			
			<Button label={submitLabel} direction={''} hierarchy={'primary'}>
				{icon}
			</Button>
		</form>
	)
}