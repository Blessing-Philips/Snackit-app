import PropTypes from 'prop-types';
import styles from './card.module.css';

const cardItems = [
    {
        title: "Outdoor Catering",
        desc: "Discover tantalizing recipes, expert cooking tips, captivating food stories, and the latest culinary trends that will elevate your dining experience to new heights.",
        image: "https://cdn-icons-png.freepik.com/256/7270/7270992.png?ga=GA1.1.1531398589.1702848145&semt=ais_hybrid",
      },
      {
        title: "Quality Food",
        desc: "Discover tantalizing recipes, expert cooking tips, captivating food stories, and the latest culinary trends that will elevate your dining experience to new heights.",
        image: "https://cdn-icons-png.freepik.com/256/11661/11661680.png?ga=GA1.1.1531398589.1702848145&semt=ais_hybrid",
      },
      {
        title: "Online Order",
        desc: "Discover tantalizing recipes, expert cooking tips, captivating food stories, and the latest culinary trends that will elevate your dining experience to new heights.",
        image: "https://cdn-icons-png.freepik.com/256/6337/6337186.png?ga=GA1.1.1531398589.1702848145&semt=ais_hybrid",
      },
      {
        title: "24/7 Service",
        desc: "Discover tantalizing recipes, expert cooking tips, captivating food stories, and the latest culinary trends that will elevate your dining experience to new heights.",
        image: "https://cdn-icons-png.freepik.com/256/10782/10782695.png?ga=GA1.1.1531398589.1702848145&semt=ais_hybrid",
      },
]

const Card = () => {
  return <div className={styles.cardFlex}>

    {cardItems.map((card)=> (
      <CardList card={card} key={card.title} />
    ))} 
          
  </div>         
}

const CardList =({card}) =>{

    CardList.propTypes = {
        card: PropTypes.node.isRequired,
    }

    return <div className={styles.card}>  
      <img src={card.image} alt={card.title} className=""/>
      <h3>{card.title}</h3>
      <p>{card.desc}</p> 
                       
    </div>
}

export default Card;

