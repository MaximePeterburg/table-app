import { ReactNode } from "react";
type FooterProps = {
	children: ReactNode;
};
const Footer = ({ children }: FooterProps) => {
	return <>{children}</>;
};

export default Footer;
