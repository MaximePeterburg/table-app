import { ReactNode } from "react";

type CardLayoutProps = {
	children: ReactNode[];
};

const CardLayout = ({ children }: CardLayoutProps) => {
	const [header, body, footer] = children;
	return (
		<div className="flex max-w-3xl flex-col gap-2 bg-gray-100 px-3 py-1.5">
			{header}
			{body}
			{footer}
		</div>
	);
};
export default CardLayout;
