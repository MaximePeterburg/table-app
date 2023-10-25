type CardHeaderProps = {
	title: string;
	handleClick: () => void;
	children?: React.ReactNode;
};

const CardHeader = ({ title, handleClick, children }: CardHeaderProps) => {
	return (
		<header className="flex w-full items-center justify-between py-2">
			<div className="flex items-center gap-4">
				<button
					onClick={handleClick}
					className="rounded-lg bg-gray-400 px-3 py-1.5 text-2xl hover:opacity-80"
				>
					👇
				</button>
				<h2 className="cursor-default text-2xl font-bold">{title}</h2>
			</div>
			{children}
		</header>
	);
};

export default CardHeader;
