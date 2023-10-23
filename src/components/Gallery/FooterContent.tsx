type FooterContentProps = {
	createdAt: Date;
};

const FooterContent = ({ createdAt }: FooterContentProps) => {
	return <div>Последнее обновление {createdAt.toLocaleDateString()}</div>;
};

export default FooterContent;
