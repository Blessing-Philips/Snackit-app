import  { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchProductsByCategory } from '../../store/categorySlice';
import styles from './categoriesCard.module.css';
import Button from '../Button';
import { addToCart } from '../../store/cartSlice';

export const CategoriesCard = () => {
    const dispatch = useDispatch();
    const { categories, loadingCategories, loadingProducts, products } = useSelector(state => state.categories);
    // console.log(categories, "hereeee")
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
                                {/* <h3>{categories.find(item => item._id === selectedCategory)?.name}</h3> */}
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
            
            {/* <h2>Products</h2>
            {loadingProducts ? (
                <p>Loading products...</p>
            ) : (
                categories.map((category) => (
                    <div key={category.id}>
                        <h3>{category.name}</h3>
                        {category.products && category.products.length > 0 ? (
                            <ul className={styles.productList}>
                                {category.products.map((product) => (
                                    <li key={product.data._id}>{product.data.name}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No products found for {category.name}</p>
                        )}
                    </div>
                ))
            )} */}
        </div> 
            </div>
    );
};

// // import PropTypes from 'prop-types';
// import  { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCategories, fetchProductsByCategory } from '../../store/categorySlice';
// import styles from './categoriesCard.module.css';

// export const CategoriesCard = () => {
//     const dispatch = useDispatch();
//     const { categories, loadingCategories, loadingProducts } = useSelector(state => state.categories);
//     const [selectedCategoryId, setSelectedCategoryId] = useState(null);


//     useEffect(() => {
//         dispatch(fetchCategories());
//     }, [dispatch]);

//     const handleCategoryClick = (categoryId) => {
//         setSelectedCategoryId(categoryId);
//         dispatch(fetchProductsByCategory(categoryId));
//     };
 

//     return (
//             <div className={styles.productWrap}>
//             <h1>Categories</h1>
//             {loadingCategories ? (
//                 <p>Loading categories...</p>
//             ) : (
//                 <ul className={styles.categoryList}>
//                     {categories.map((category) => (
//                         <li key={category._id} onClick={() => handleCategoryClick(category._id)}>
//                             {category.name}
//                             {/* {category._id} */}
//                         </li>
//                     ))}
//                 </ul>
//             )}
//             <div >
//             <h2>Products</h2>
//             {loadingProducts ? (
//                 <p>Loading products...</p>
//             ) : (
//                 selectedCategoryId && categories.map((category) => (
//                     <div key={category.id}>
//                         {/* <h3>{category.name}</h3> */}
//                         {category.products && category.products.length > 0 ? (
//                             <ul className={styles.productList}>
//                                 {category.products.map((product) => (
//                                     <li key={product.id}>{product.name}</li>
//                                 ))}
//                             </ul>
//                         ) : (
//                             <p>No products found for {category.name}</p>
//                         )}
//                     </div>
//                 ))
//             )}
//         </div> 
//             </div>
//     );
// };




















// export default CategoriesCard;

// export const ProductDisplay = () => {
//     const dispatch = useDispatch();
//     const { categories, loadingProducts } = useSelector(state => state.categories);

//     useEffect(() => {
//         dispatch(fetchCategories());
//     }, [dispatch]);

//     return (
//         <div >
//             <h2>Products</h2>
//             {loadingProducts ? (
//                 <p>Loading products...</p>
//             ) : (
//                 categories.map((category) => (
//                     <div key={category.id}>
//                         <h3>{category.name}</h3>
//                         {category.products && category.products.length > 0 ? (
//                             <ul>
//                                 {category.products.map((product) => (
//                                     <li key={product.id}>{product.name}</li>
//                                 ))}
//                             </ul>
//                         ) : (
//                             <p>No products found for {category.name}</p>
//                         )}
//                     </div>
//                 ))
//             )}
//         </div> 
//     )
// }

    // ComponentCard.propTypes = {
    //     children: PropTypes.node.isRequired,
    //     className: PropTypes.node.isRequired,
    //     };

    // return <div className={styles.wrapper}>
    //     {children}
    // </div>
    
//}

