import { ReactNode } from "react";
type CardLayoutProps = {
	children: ReactNode[];
};
const CardLayout = ({ children }: CardLayoutProps) => {
	const [header, body, footer] = children;
	return (
		<div className="bg-gray-100">
			{header}
			{body}
			{footer}
		</div>
	);
};
export default CardLayout;
