type HeaderProps = {
	title: string;
	handleClick: () => void;
	children?: React.ReactNode;
};

const Header = ({ title, handleClick, children }: HeaderProps) => {
	return (
		<div className="flex w-full items-center justify-between">
			<div className="flex items-center gap-4">
				<button
					onClick={handleClick}
					className="rounded-lg bg-gray-400 px-3 py-1.5 text-2xl"
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
