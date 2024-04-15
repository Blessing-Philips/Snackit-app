import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, selectAllProducts } from "../../store/productSlice";
import Intro from "../../components/Intro";
// import ProductCard from "../../components/Product/productCard";
import styles from './menu.module.css';


const Menu = () => {
    const dispatch = useDispatch()
    const products = useSelector(selectAllProducts);

    useEffect( () => {
        dispatch(fetchProduct())
        console.log(products.products, ">>>>>>this is the data")
    }, [])


    return <div>
        <Intro>Menu</Intro>
        <div>
          {
            products.status !== 'fulfilled' ?
            <div> Loading....</div> : 
            <div className={styles.productWrap}>
                {
                    products.products && products.products.map((product, index) => {
                        return  <div key={index}>
                                {JSON.stringify(product)}
                            </div>
                        
                    })
                }
                {/* {
                    products.products && products.products[0].products.map((product, index) => {
                        return (
                            <ProductCard key={index} product={product}></ProductCard>
                        )
                    })
                } */}
            </div>
            
          }
        </div>
        {/* <Product/> */}
    </div>
}

export default Menu;