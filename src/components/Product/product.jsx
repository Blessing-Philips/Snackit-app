import { useState, useEffect} from 'react';


const Product = () => {

const [menu, setMenu] = useState([]);

//   useEffect( ()=> {
//     fetch("http://localhost:3000/api/products")
//     .then(response => response.json())
//     .then(data => setMenu(data.product))

//     .catch(e => console.log(e, ">>>>>>>This is the error"))
    
//   }, [])

//   return <div>
//     <h3>Menu Lists</h3>
//     {JSON.stringify(menu)}
//     {menu}
//   </div>
// }

useEffect( ()=> {
  fetch("https://api.adviceslip.com/advice")
  .then(response => response.json())
  .then(data => setMenu(data.slip.advice))

  .catch(e => console.log(e, ">>>>>>>This is the error"))
  
}, [])

return <div>
  <h3>Menu Lists</h3>
  {JSON.stringify(menu)}
</div>
}

export default Product;