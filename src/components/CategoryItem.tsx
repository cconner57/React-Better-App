interface CategoryProps {
	category?: string;
	categoryName: string;
	setCategory: (category: string) => void;
}

const CategoryItem = ({ category, categoryName, setCategory }: CategoryProps) => {
	return (
		<div
			className={`CategoryItem ${category === categoryName && 'Active-Category'}`}
			onClick={() => {
				setCategory(categoryName);
			}}>
			<h1>{categoryName}</h1>
		</div>
	);
};

export default CategoryItem;
