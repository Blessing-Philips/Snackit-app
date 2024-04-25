import  { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchProductsByCategory } from '../../store/categorySlice';
import styles from './categoriesCard.module.css';
import Button from '../Button';
import { addToCart } from '../../store/cartSlice';

export const CategoriesCard = () => {
    const dispatch = useDispatch();
    const { categories, loadingCategories, loadingProducts, products } = useSelector(state => state.categories);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    useEffect(() => {
        if (categories.length > 0 && selectedCategory === null) {
            setSelectedCategory(categories[0]._id);
            dispatch(fetchProductsByCategory(categories[0]._id));
        }
    }, [categories, selectedCategory, dispatch]);

    const handleCategoryClick = (categoryId) => {
        setSelectedCategory(categoryId);
        dispatch(fetchProductsByCategory(categoryId));
    };
 

    return (
            <div className={styles.productContainer}>
            {loadingCategories ? (
                <p>Loading categories...</p>
            ) : (
                <ul className={styles.categoryList}>
                    {categories.map((category) => (
                        <li key={category._id} 
                            onClick={() => handleCategoryClick(category._id)}
                            className={selectedCategory === category._id ? styles.selected : styles.disable}
                        >
                            {category.name} 
                        </li>
                    ))}
                </ul>
            )}
            <div className={styles.contain}>
                {selectedCategory && (
                    <>
                        {loadingProducts ? (
                            <p>Loading products...</p>
                        ) : (
                            <>
                                {products[selectedCategory] && products[selectedCategory].length > 0 ? (
                                    <ul className={styles.productList}>
                                        {products[selectedCategory].map((product) => (
                                            <li key={product._id} className={styles.product}>
                                                <div className={styles.img}><img src={product.imageURL} alt={product.name} style={{width: "200px", height: "200px", objectFit: "cover", borderRadius: " 50%"}}/></div>
                                                <div className={styles.info}>
                                                    <h3>{product.name}</h3>
                                                    <ul className={styles.fooditem}>{product.foodItems.map((item, index)=>(
                                                        <li key={index}>{item}</li>))}
                                                    </ul>
                                                    <span>₦{(product.price).toLocaleString()}</span>
                                                    <Button variant="primary" onClick={()=>{ dispatch(addToCart(product))}}>Add to Cart</Button>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>No products found for {categories.find(item => item._id === selectedCategory)?.name}</p>
                                )}
                            </>
                        )}
                    </>
            )}
        </div> 
            </div>
    );
};

