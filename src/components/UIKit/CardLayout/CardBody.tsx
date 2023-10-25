import { useAutoAnimate } from "@formkit/auto-animate/react";
import { ReactNode } from "react";
type CardBodyProps = {
	children: ReactNode;
};

const CardBody = ({ children }: CardBodyProps) => {
	const [parentRef] = useAutoAnimate<HTMLDivElement>();
	return (
		<div
			className="border-y border-gray-400 "
			ref={parentRef}
		>
			{children}
		</div>
	);
};

export default CardBody;
