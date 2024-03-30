import PropTypes from 'prop-types';
import styles from './card.module.css';



const cardItems = [
    {
        title: "Master Chef",
        desc: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
        image: "",
      },
      {
        title: "Quality Food",
        desc: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
        image: "",
      },
      {
        title: "Online Order",
        desc: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
        image: "",
      },
      {
        title: "24/7 Service",
        desc: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
        image: "",
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
// const Card = (props) => {

//     Card.propTypes = {
//         children: PropTypes.node.isRequired,
//         variant:PropTypes.node.isRequired,
//         };

//     return <div>     
                
                
//     </div>
// }

export default Card;

// const 