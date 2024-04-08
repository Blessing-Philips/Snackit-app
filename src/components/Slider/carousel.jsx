import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './carousel.module.css';
import menu1 from '../../assets/spagg.jpg';
import menu2 from '../../assets/image2.png';
import Button from '../Button';

const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
      
    return (
      <div className={styles.slideWrap}>
        <h2>Our Popular Menu</h2>
        <p>
          Our catering services are remarkable and of international standard. 
          Our customized  options are available for events ranging from intimate 
          gatherings to grand celebrations.
        </p>
        <Slider {...settings} className={styles.slides}>
          <div className={styles.wrap}>
            <img src={menu1} alt="Slide 1"  />
            <span className={styles.btnwrap}>
              <Button>Order Now&gt;&gt;&gt; </Button>
            </span>
          </div>
          <div className={styles.wrap}>
            <img src={menu2} alt="Slide 2" height="240px"/>
            <span className={styles.btnwrap}>
              <Button>Order Now&gt;&gt;&gt;</Button>
            </span>
          </div>
          <div className={styles.wrap}>
            <img src={menu1} alt="Slide 3" />
            <span className={styles.btnwrap}>
              <Button>Order Now&gt;&gt;&gt;</Button>
            </span>
          </div>
        </Slider>
      </div>
    )
}
export default Carousel;