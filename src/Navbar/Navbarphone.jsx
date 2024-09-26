import chart from './photos/chart.png'
import styles from './Navbarphone.module.css'
import hamburger from './photos/hamburger.png'
import newlist from './photos/newlist.png'
import sale from './photos/sale.png'
import home from './photos/home.png'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import Cartphone from '../Cart/Cartphone'

function Navbarphone({cartCount}) {

    const [activeLink, setActiveLink] = useState(null);

    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
    }

    return(
        <>
            <div className={styles.top}>
                <div className={styles.menu}>
                <div className={styles.ham}><img src={hamburger} style={{width:'1.5em',paddingTop:'6px'}}></img></div>
                <div>MENU</div>
                </div> 
                    <div className={styles.logo}>E-CLOTH</div>

                <Link to="/Cart">
                <div className={styles.cartcontainer}>
                    <div className={styles.cartcount} style={{marginRight:"20px",color:"white",backgroundColor:"red",borderRadius:"50px",paddingLeft:"1px",paddingRight:"1px"}}>{cartCount}</div>
                <div className={styles.chart}><img src={chart} style={{width:'1.3em',paddingTop:'6px'}}></img></div>
                </div>
                </Link>
            </div>

            <div className={styles.bot}>

            <Link 
                to="/On-Sale" 
                className={styles.foot} 
                onClick={() => handleLinkClick('sales')}
            >
                <div><img src={sale} style={{ height: '2em' }} alt="sale icon" /></div>
                <div 
                    className={styles.sales} 
                    style={{ color: activeLink === 'sales' ? 'white' : 'black' }} 
                >
                    Sales
                </div>
            </Link>

            <Link 
                to="/" 
                className={styles.foot} 
                onClick={() => handleLinkClick('home')}
            >
                <div><img src={home} style={{ height: '2em' }} alt="home icon" /></div>
                <div 
                    style={{ color: activeLink === 'home' ? 'white' : 'black' }}
                >
                    Home
                </div>
            </Link>

            <Link 
                to="/Shop" 
                className={styles.foot} 
                onClick={() => handleLinkClick('shop')}
            >
                <div><img src={chart} style={{ height: '2em' }} alt="shop icon" /></div>
                <div 
                    style={{ color: activeLink === 'shop' ? 'white' : 'black' }}
                >
                    Shop
                </div>
            </Link>

            <Link 
                to="/New-Arrivals" 
                className={styles.foot} 
                onClick={() => handleLinkClick('new')}
            >
                <div><img src={newlist} style={{ height: '2em' }} alt="new arrivals icon" /></div>
                <div 
                    style={{ color: activeLink === 'new' ? 'white' : 'black' }}
                >
                    New
                </div>
            </Link>

            </div>
        </>
    );     
}

export default Navbarphone;