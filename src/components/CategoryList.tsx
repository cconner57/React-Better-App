import CategoryItem from './CategoryItem';

interface CategoryProps {
	category: string;
	setCategory: (category: string) => void;
}

const CategoryList = ({ category, setCategory }: CategoryProps) => {
	return (
		<div className='Category'>
			<CategoryItem
				category={category}
				categoryName='all'
				setCategory={setCategory}
			/>
			<CategoryItem
				category={category}
				categoryName='UI'
				setCategory={setCategory}
			/>
			<CategoryItem
				category={category}
				categoryName='UX'
				setCategory={setCategory}
			/>
			<CategoryItem
				category={category}
				categoryName='enhancement'
				setCategory={setCategory}
			/>
			<CategoryItem
				category={category}
				categoryName='bug'
				setCategory={setCategory}
			/>
			<CategoryItem
				category={category}
				categoryName='feature'
				setCategory={setCategory}
			/>
		</div>
	);
};

export default CategoryList;
