import { ReactNode } from "react";
type FooterProps = {
	children: ReactNode;
};
const Footer = ({ children }: FooterProps) => {
	return <footer className="py-2">{children}</footer>;
};

export default Footer;
