import { getData } from "../../utils/getData.util";
import Body from "../ui-kit/Body";
import CardLayout from "../ui-kit/CardLayout";
import Footer from "../ui-kit/Footer";
import Header from "../ui-kit/Header";
import Pagination from "../ui-kit/Pagination";
import TableContent from "./TableContent";

const tableContent = {
	title: "Table",
	data: getData(),
};

const Table = () => {
	const { title, data } = tableContent;

	return (
		<>
			<CardLayout>
				<Header title={title} />
				<Body>
					<TableContent data={data} />
				</Body>
				<Footer>
					<Pagination />
				</Footer>
			</CardLayout>
		</>
	);
};

export default Table;
