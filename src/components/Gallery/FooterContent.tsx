type FooterContentProps = {
	updatedAt: Date;
};

const FooterContent = ({ updatedAt }: FooterContentProps) => {
	return <div>Последнее обновление {updatedAt.toLocaleDateString()}</div>;
};

export default FooterContent;
