import styles from './Productsold.module.css'
import PropTypes from 'prop-types'

function Productsold({ image, prods, ammount, gender, old}) {

    return (
        <div className={styles.card}  style={{
            border: gender === 'male' ? '5px solid blue' : '5px solid pink',
        }}>
            <div><img src={image} className={styles.picture}/></div>
            <div className={styles.prods}>{prods}</div>
            <div className={styles.price}>
            <div className={styles.old}>{old}</div>
            <div className={styles.ammount}>{ammount}</div>
            </div>
        </div>
    );
}

Productsold.propTypes = {
    image: PropTypes.string.isRequired,
    prods: PropTypes.string.isRequired,
    ammount: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    old: PropTypes.string.isRequired,
}

export default Productsold;