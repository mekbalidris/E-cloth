import styles from './Product.module.css'
import PropTypes from 'prop-types'

function Product({ image, prods, ammount, gender}) {

    return (
        <div className={styles.card}  style={{
            border: gender === 'male' ? '5px solid blue' : '5px solid pink',
        }}>
            <div><img src={image} className={styles.picture}/></div>
            <div className={styles.prods}>{prods}</div>
            <div className={styles.ammount}>{ammount}</div>
        </div>
    );
}

Product.propTypes = {
    image: PropTypes.string.isRequired,
    prods: PropTypes.string.isRequired,
    ammount: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
}

export default Product;