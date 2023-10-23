import { Payment } from "../../utils/getData.util";

type TableContentProps = {
	data: Payment[];
};

const TableContent = ({ data }: TableContentProps) => {
	return (
		<ul>
			{data.slice(0, 6).map((payment) => (
				<li key={payment.id}>{payment.email}</li>
			))}
		</ul>
	);
};

export default TableContent;
