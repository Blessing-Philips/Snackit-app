import PropTypes from 'prop-types';

import styles from './tabs.module.css';



const Tabs = ({list, activeTab, onTabSwitch}) => {

    Tabs.propTypes = {
        list: PropTypes.any.isRequired,
        activeTab:PropTypes.any.isRequired,
        onTabSwitch:PropTypes.any,

        };

        let active = activeTab === '' ? list[0] : activeTab;
        console.log(active);
        return (
            <div className={styles.listContainer}>
                <div className={styles.listWrap}>
                    {list.map((item, index) => {
                        return (
                            <TabItem 
                                title={item}
                                key={index}
                                index={index}
                                active={active === item}
                                setActive={onTabSwitch}
                                />
                        )
                    })}
                </div>
            </div>
        )

}
export default Tabs;



export const TabItem = ({ title, index, active, setActive}) => {

    TabItem.propTypes = {
        title: PropTypes.any.isRequired,
        index:PropTypes.any.isRequired,
        active:PropTypes.any,
        setActive:PropTypes.func,
    };

    const className = active ? styles.border : styles.empty;
    

    return (
        <div className="nav-item px-2">
            <button onClick={() => setActive(title)} className={styles.list}>
                <span className={` ${className}`}>
                    {title.toUpperCase()}
                </span>
            </button>
        </div> 
    )
}


