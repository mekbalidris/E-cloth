import React from 'react';
import { Link } from 'react-router-dom';
import loop from './photos/loop.png';
import chart from './photos/chart.png';
import profile from './photos/profile.png';
import styles from './Navbar.module.css';
import PropTypes from 'prop-types'


function Navbar({ cartCount }) {
    return (
        <div className={styles.home}>
            <nav>
                <Link to="/" className={styles.logo}>E-Cloth</Link>
                <Link to="/" className={styles.Npage}>Home</Link>
                <Link to="/shop" className={styles.Npage}>Shop</Link>
                <Link to="/on-sale" className={styles.Npage}>On Sale</Link>
                <Link to="/new-arrivals" className={styles.Npage}>New Arrivals</Link>
                <div className={styles.searche}>
                    <div><img className="styles.loop" src={loop} style={{ height: '20px' }} /></div>
                    <div className="styles.search">Search for Products...</div>
                </div>
                <div className={styles.cart}>
                    <Link to="/Cart">
                    <div className={styles.cartcount}>{cartCount}</div>
                    <img src={chart} style={{ height: "2em", paddingLeft: "3em" }} /> 
                    </Link>
                </div>
                <div className='styles.profile'><img src={profile} style={{ height: "1.5em" }} /></div>
            </nav>
        </div>
    );
}

Navbar.propTypes = {
    cartCount: PropTypes.number.isRequired,
}

export default Navbar;
