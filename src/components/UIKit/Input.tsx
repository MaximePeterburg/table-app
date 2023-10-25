type InputProps = {
	placeholder: string;
};
const Input = ({ placeholder }: InputProps) => {
	return (
		<input
			placeholder={placeholder}
			className="w-[40%] max-w-xs rounded-md bg-gray-300 px-1 py-1"
		/>
	);
};

export default Input;
