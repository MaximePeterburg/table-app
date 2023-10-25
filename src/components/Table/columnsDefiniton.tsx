import { ColumnDef } from "@tanstack/table-core";
import { Payment } from "../../utils/getData.util";

export const columns: ColumnDef<Payment>[] = [
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
