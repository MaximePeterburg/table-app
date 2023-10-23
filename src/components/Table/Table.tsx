import { atom } from "jotai";
import { useAtom } from "jotai/react";
import { getData } from "../../utils/getData.util";
import Body from "../UIKit/Layout/Body";
import CardLayout from "../UIKit/Layout/CardLayout";
import Footer from "../UIKit/Layout/Footer";
import Header from "../UIKit/Layout/Header";
import Pagination from "../UIKit/Pagination";
import TableContent from "./TableContent";

const tableContent = {
	title: "Table",
	data: getData(),
};

export const tableDisplayAtom = atom<boolean>(true);

const Table = () => {
	const { title, data } = tableContent;
	const [isTableDisplayed, setIsTableDisplayed] = useAtom(tableDisplayAtom);

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

				{isTableDisplayed && (
					<Body>
						<TableContent data={data} />
					</Body>
				)}

				<Footer>
					<Pagination />
				</Footer>
			</CardLayout>
		</>
	);
};

export default Table;
