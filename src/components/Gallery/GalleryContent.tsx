type GalleryContentProps = {
	data: string[];
};

const GalleryContent = ({ data }: GalleryContentProps) => {
	return (
		<ul className="flex flex-wrap">
			{data.slice(0, 6).map((image) => (
				<li key={image}>
					<img
						src={image}
						height="72"
						width="117"
					/>
				</li>
			))}
		</ul>
	);
};

export default GalleryContent;
