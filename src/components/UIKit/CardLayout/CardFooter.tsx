import { ReactNode } from "react";
type CardFooterProps = {
	children?: ReactNode;
};
const CardFooter = ({ children }: CardFooterProps) => {
	return <footer className="py-2">{children}</footer>;
};

export default CardFooter;
