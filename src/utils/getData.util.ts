import { customAlphabet } from "nanoid";
const nanoid = customAlphabet("1234567890abcdef", 10);

export enum PAYMENT_STATUS {
	PENDING = "pending",
	COMPLETED = "completed",
}

export type Payment = {
	id: string;
	ammount: number;
	status: PAYMENT_STATUS;
	transaction: string;
};

export const getData = (): Payment[] =>
	new Array(50).fill(null).map(() => ({
		id: nanoid(),
		ammount: Math.floor(Math.random() * 10000),
		status:
			Math.random() > 0.5 ? PAYMENT_STATUS.COMPLETED : PAYMENT_STATUS.PENDING,
		transaction: nanoid(),
	}));
