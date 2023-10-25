import {
	getCoreRowModel,
	getPaginationRowModel,
	useReactTable,
} from "@tanstack/react-table";
import { useAtom } from "jotai/react";
import { tableDisplayAtom } from "../../store/atoms";
import { getData } from "../../utils/getData.util";
import CardBody from "../UIKit/CardLayout/CardBody";
import CardFooter from "../UIKit/CardLayout/CardFooter";
import CardHeader from "../UIKit/CardLayout/CardHeader";
import CardLayout from "../UIKit/CardLayout/CardLayout";
import { columns } from "./columnsDefiniton";
import FooterContent from "./FooterContent";
import TableContent from "./TableContent";

const tableContent = {
	title: "Table",
	data: getData(),
};

const Table = () => {
	const { title, data } = tableContent;
	const [isTableDisplayed, setIsTableDisplayed] = useAtom(tableDisplayAtom);

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
	});

	const handleDisplayTableClick = () => {
		setIsTableDisplayed(!isTableDisplayed);
	};

	return (
		<>
			<CardLayout>
				<CardHeader
					handleClick={handleDisplayTableClick}
					title={title}
				/>

				<CardBody>
					{isTableDisplayed && (
						<TableContent
							data={data}
							table={table}
						/>
					)}
				</CardBody>

				<CardFooter>
					<FooterContent table={table} />
				</CardFooter>
			</CardLayout>
		</>
	);
};

export default Table;
