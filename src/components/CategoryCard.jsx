
function CategoryCard({category}) {


    
    return (
        <span className="category-list__item">
          <img className="category-list__icon" src={category.imageUrl} alt="Name" />
          <strong className="category-list__name">{category.name}</strong>
        </span>

    );
}

export default CategoryCard;