type HeaderProps = {
	title: string;
	children?: React.ReactNode;
};

const Header = ({ title, children }: HeaderProps) => {
	return (
		<>
			<h2 className="text-2xl font-bold">{title}</h2>
			{children}
		</>
	);
};

export default Header;
