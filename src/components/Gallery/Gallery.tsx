import { atom } from "jotai";
import { useAtom } from "jotai/react";
import france from "../../assets/france.png";
import italy from "../../assets/italy.png";
import japan from "../../assets/japan.png";
import spain from "../../assets/spain.png";
import uk from "../../assets/uk.png";
import usa from "../../assets/usa.png";
import Body from "../UIKit/Layout/Body";
import CardLayout from "../UIKit/Layout/CardLayout";
import Footer from "../UIKit/Layout/Footer";
import Header from "../UIKit/Layout/Header";
import SearchBar from "../UIKit/SearchBar";
import FooterContent from "./FooterContent";
import GalleryContent from "./GalleryContent";

const galleryContent = {
	title: "Gallery",
	data: [japan, france, italy, spain, uk, usa],
	createdAt: new Date(),
};
export const galleryDisplayAtom = atom<boolean>(true);

const Gallery = () => {
	const { title, data } = galleryContent;
	const [isGalleryDisplayed, setIsGalleryDisplayed] =
		useAtom(galleryDisplayAtom);

	const handleDisplayGalleryClick = () => {
		setIsGalleryDisplayed(!isGalleryDisplayed);
	};

	return (
		<CardLayout>
			<Header
				handleClick={handleDisplayGalleryClick}
				title={title}
			>
				<SearchBar />
			</Header>

			<Body>{isGalleryDisplayed && <GalleryContent data={data} />}</Body>

			<Footer>
				<FooterContent createdAt={galleryContent.createdAt} />
			</Footer>
		</CardLayout>
	);
};

export default Gallery;
