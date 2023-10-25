import { useAtom } from "jotai/react";
import france from "../../assets/france.png";
import italy from "../../assets/italy.png";
import japan from "../../assets/japan.png";
import spain from "../../assets/spain.png";
import uk from "../../assets/uk.png";
import usa from "../../assets/usa.png";
import { galleryDisplayAtom } from "../../store/atoms";
import CardBody from "../UIKit/CardLayout/CardBody";
import CardFooter from "../UIKit/CardLayout/CardFooter";
import CardHeader from "../UIKit/CardLayout/CardHeader";
import CardLayout from "../UIKit/CardLayout/CardLayout";
import FooterContent from "./FooterContent";
import GalleryContent from "./GalleryContent";
import HeaderContent from "./HeaderContent";

const galleryContent = {
	title: "Gallery",
	data: [japan, france, italy, spain, uk, usa],
	updatedAt: new Date(),
};

const Gallery = () => {
	const { title, data, updatedAt } = galleryContent;
	const [isGalleryDisplayed, setIsGalleryDisplayed] =
		useAtom(galleryDisplayAtom);

	const handleDisplayGalleryClick = () => {
		setIsGalleryDisplayed(!isGalleryDisplayed);
	};

	return (
		<CardLayout>
			<CardHeader
				handleClick={handleDisplayGalleryClick}
				title={title}
			>
				<HeaderContent />
			</CardHeader>

			<CardBody>
				{isGalleryDisplayed && <GalleryContent data={data} />}
			</CardBody>

			<CardFooter>
				<FooterContent updatedAt={updatedAt} />
			</CardFooter>
		</CardLayout>
	);
};

export default Gallery;
