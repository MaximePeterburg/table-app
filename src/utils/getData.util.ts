import { nanoid } from "nanoid";

export enum PAYMENT_STATUS {
	PENDING = "pending",
	COMPLETED = "completed",
}

export type Payment = {
	id: string;
	ammount: number;
	status: PAYMENT_STATUS;
	email: string;
};

export const getData = (): Payment[] =>
	new Array(50).fill(null).map(() => ({
		id: nanoid(),
		ammount: Math.random() * 1000,
		status: PAYMENT_STATUS.PENDING,
		email: "123@gmail.com",
	}));
