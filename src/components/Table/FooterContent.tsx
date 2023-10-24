import { Table } from "@tanstack/react-table";
import { Payment } from "../../utils/getData.util";

type FooterContentProps = {
	table: Table<Payment>;
};
const FooterContent = ({ table }: FooterContentProps) => {
	return (
		<div className="flex justify-center gap-4">
			<button
				disabled={!table.getCanPreviousPage()}
				onClick={() => table.previousPage()}
				className="rounded bg-gray-400 px-1.5 text-xl hover:opacity-80 disabled:opacity-30"
			>
				{"<"}
			</button>
			<button
				disabled={!table.getCanNextPage()}
				onClick={() => table.nextPage()}
				className="rounded bg-gray-400 px-1.5 text-xl hover:opacity-80 disabled:opacity-30"
			>
				{">"}
			</button>
		</div>
	);
};

export default FooterContent;
