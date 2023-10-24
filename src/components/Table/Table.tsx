import {
	ColumnDef,
	getCoreRowModel,
	getPaginationRowModel,
	useReactTable,
} from "@tanstack/react-table";
import { atom } from "jotai";
import { useAtom } from "jotai/react";
import { Payment, getData } from "../../utils/getData.util";
import Body from "../UIKit/Layout/Body";
import CardLayout from "../UIKit/Layout/CardLayout";
import Footer from "../UIKit/Layout/Footer";
import Header from "../UIKit/Layout/Header";
import Pagination from "./FooterContent";
import TableContent from "./TableContent";

export const tableDisplayAtom = atom<boolean>(true);

const tableContent = {
	title: "Table",
	data: getData(),
};

const columns: ColumnDef<Payment>[] = [
	{
		accessorKey: "transaction",
		header: "Транзакция",
		cell: ({ getValue }) => (
			<p className="flex justify-center">{getValue() as string}</p>
		),
	},
	{
		accessorKey: "ammount",
		header: "Сумма",
		cell: ({ getValue }) => (
			<p className="flex justify-center">{getValue() as string} р.</p>
		),
	},
	{
		accessorKey: "status",
		header: "Статус оплаты",
		cell: ({ getValue }) => (
			<p className="flex justify-center">{getValue() as string}</p>
		),
	},
];

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
				<Header
					handleClick={handleDisplayTableClick}
					title={title}
				/>

				<Body>
					{isTableDisplayed && (
						<TableContent
							data={data}
							table={table}
						/>
					)}
				</Body>

				<Footer>
					<Pagination table={table} />
				</Footer>
			</CardLayout>
		</>
	);
};

export default Table;
