import { useEffect} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './carousel.module.css';
import {useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import { fetchProduct, selectAllProducts } from '../../store/productSlice';

// import Button from '../Button';
import ProductCard from '../Product';

const ProductSlide = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

    useEffect(() => {
      dispatch(fetchProduct())
      
    }, [dispatch]);


    const onAddItem =(product) =>{
      dispatch(addToCart(product))
    }
  
    return (
      <div className={styles.slideWrap}>
        <h2>Our Popular Menu</h2>
        <p>
          Our catering services are remarkable and of international standard. 
          Our customized  options are available for events ranging from intimate 
          gatherings to grand celebrations.
        </p>
        <Slider {...settings} className={styles.slides}>
          { products ? (
              products && products.map((product, index) => {
                return <ProductCard key={index} product={product} onAddItem={onAddItem}></ProductCard>
              })
          ) : <p>Waiting for Products</p>}
        </Slider>
      </div>
    )
}
export default ProductSlide;


