import {useState, useEffect} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './carousel.module.css';
import {useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';

// import Button from '../Button';
import ProductCard from '../Product/productCard';

const ProductSlide = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

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
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3000/api/products');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setProducts(data.data);
          console.log(data, ">>>>>>>>This is the data")

        } catch (e) {
          console.log(e, ">>>>>>>This is the error")
        }
      };
  
      fetchData();
    }, []);


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

        {
            products.map((product, index) => {
              return <ProductCard key={index} product={product} onAddItem={onAddItem}></ProductCard>
            })
        }
        
        </Slider>
      </div>
    )
}
export default ProductSlide;


//{JSON.stringify(menu)}
