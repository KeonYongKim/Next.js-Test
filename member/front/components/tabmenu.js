import React from 'react';
import PropTypes from 'prop-types';
import styles from '../components/tabmenu.module.css' ;
import classNames from 'classnames' ;

const TabMenu = () => {
    return (
        <div>
            <nav className={styles.tab_type1}>
                <ul>
                    <li><a href="#a">브랜드별</a></li>
                    <li><a href="#a">일반기능도료</a></li>
                    <li><a href="#a">특수기능도료</a></li>
                    <li><a href="#a">DIY(가정용)</a></li>
                    <li><a href="#a">KS규격도료</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default TabMenu;