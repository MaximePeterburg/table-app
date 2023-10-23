import { useAutoAnimate } from "@formkit/auto-animate/react";
import { ReactNode } from "react";
type BodyProps = {
	children: ReactNode;
};

const Body = ({ children }: BodyProps) => {
	const [parentRef] = useAutoAnimate<HTMLDivElement>();
	return <div ref={parentRef}>{children}</div>;
};

export default Body;
