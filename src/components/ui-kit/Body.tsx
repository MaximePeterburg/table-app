import { ReactNode } from "react";
type BodyProps = {
	children: ReactNode;
};

const Body = ({ children }: BodyProps) => {
	return <>{children}</>;
};

export default Body;
