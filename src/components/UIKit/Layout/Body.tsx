import { useAutoAnimate } from "@formkit/auto-animate/react";
import { ReactNode } from "react";
type BodyProps = {
	children: ReactNode;
};

const Body = ({ children }: BodyProps) => {
	const [parentRef] = useAutoAnimate<HTMLDivElement>();
	return (
		<div
			className=" border-y border-gray-400 "
			ref={parentRef}
		>
			{children}
		</div>
	);
};

export default Body;
