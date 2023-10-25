import { customAlphabet } from "nanoid";
const nanoid = customAlphabet("1234567890abcdef", 10);

export enum PAYMENT_STATUS {
	PENDING = "pending",
	COMPLETED = "completed",
}

export type Payment = {
	id: string;
	ammount: string;
	status: PAYMENT_STATUS;
	transaction: string;
};

export const getData = (): Payment[] =>
	new Array(50).fill(null).map(() => ({
		id: nanoid(),
		ammount: (Math.random() * 10000).toFixed(2),
		status:
			Math.random() > 0.5 ? PAYMENT_STATUS.COMPLETED : PAYMENT_STATUS.PENDING,
		transaction: nanoid(),
	}));
