type HeaderProps = {
	title: string;
	handleClick: () => void;
	children?: React.ReactNode;
};

const Header = ({ title, handleClick, children }: HeaderProps) => {
	return (
		<div className="flex w-full justify-between">
			<div className="flex gap-4">
				<button
					onClick={handleClick}
					className="text-2xl"
				>
					👇
				</button>
				<h2 className="cursor-default text-2xl font-bold">{title}</h2>
			</div>
			{children}
		</div>
	);
};

export default Header;
