import { useState, useEffect } from "react";
import axios from "axios";
import CategoryCard from "../components/CategoryCard";
import { Link } from 'react-router-dom';
import allIcon from "../assets/css/image/all.svg";
import LoadingRow from "../components/LoadingRow";
function NewsCategoriesPage() {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchCategories() {
            try {
                setIsLoading(true);
                const response = await axios.get('https://c3610a79f938bf9a.mokky.dev/category');
                setCategories(response.data);
            } catch(e) {
                console.log(e);
            } finally {
                setIsLoading(false);
            }
        }
        fetchCategories();
            
        
    },  []);



    return (
        <section className="mobile-block">
            <div className="container">
                <h1 className="title">COATS</h1>
                {isLoading ? (
                    <LoadingRow />
                ) : (
                    <div className="category-list">
                    <Link to="/" className="category-list__item">
                      <img className="category-list__icon" src={allIcon} alt="Name" />
                      <strong className="category-list__name">ZARA</strong>
                    </Link>
    
                    
                        {categories.map((category) => (
                            <CategoryCard key={category.id} category={category} />
                        ))}
                       
                    </div>
                )}
                
               


                
  
            </div>
        </section>
    );
}

export default NewsCategoriesPage;