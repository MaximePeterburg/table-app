import commonwealth from "../../assets/commonwealth.png";
import europe from "../../assets/europe.png";
import france from "../../assets/france.png";
import germany from "../../assets/germany.png";
import italy from "../../assets/italy.png";
import japan from "../../assets/japan.png";
import netherlands from "../../assets/netherlands.png";
import panAmerica from "../../assets/panAmerica.png";
import panAsia from "../../assets/panAsia.png";
import spain from "../../assets/spain.png";
import uk from "../../assets/uk.png";
import usa from "../../assets/usa.png";
import ussr from "../../assets/ussr.png";
import Body from "../ui-kit/Body";
import CardLayout from "../ui-kit/CardLayout";
import Footer from "../ui-kit/Footer";
import Header from "../ui-kit/Header";
import SearchBar from "../ui-kit/SearchBar";
import FooterContent from "./FooterContent";
import GalleryContent from "./GalleryContent";

const galleryContent = {
	title: "Gallery",
	data: [
		japan,
		germany,
		france,
		italy,
		spain,
		uk,
		usa,
		ussr,
		panAmerica,
		panAsia,
		europe,
		netherlands,
		commonwealth,
	],
	createdAt: new Date(),
};

const Gallery = () => {
	const { title, data } = galleryContent;
	return (
		<CardLayout>
			<Header title={title}>
				<SearchBar />
			</Header>
			<Body>
				<GalleryContent data={data} />
			</Body>
			<Footer>
				<FooterContent createdAt={galleryContent.createdAt} />
			</Footer>
		</CardLayout>
	);
};

export default Gallery;
