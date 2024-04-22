// import  { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCategories, fetchProductsByCategory } from '../../store/categorySlice';
import { CategoriesCard } from '../../components/CategoriesCards';
import Intro from '../../components/Intro';
import styles from './menu.module.css';

const Menu = () => {
    return (
        <>
        <Intro className={styles.main}>Menu</Intro>
        <CategoriesCard/>
        </>
    )
}
export default Menu;
