import React, { useState } from 'react';
import styles from './Cartphone.module.css';
import { Link } from 'react-router-dom';

function Cartphone({ cartProducts, cartCount, setCartProducts, setCartCount }) {
    const [promoCode, setPromoCode] = useState('');

    // Function to remove a product by id and update the cart count
    const removeProduct = (id, quantity) => {
        // Remove the product from the cart
        const updatedProducts = cartProducts.filter((product) => product.id !== id);
        setCartProducts(updatedProducts);
        // Update the cart count by subtracting the product's quantity
        setCartCount(cartCount - quantity);
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.steps}>
                    <div style={{fontSize: "1.5em", fontWeight: "bold"}}>Cart</div>
                </div>

                <div className={styles.table}>
                    <div className={styles.productRows}>
                        {cartProducts.map((product) => (
                            <div key={product.id} className={styles.productRow}>
                                {/* "X" button for removing product */}
                                <button onClick={() => removeProduct(product.id, product.quantity)} className={styles.removeButton}>
                                    &times;
                                </button>

                                <div className={styles.product}>
                                    <img src={product.image} alt={product.name} className={styles.prodimg} />
                                    <p>Size: {product.size}</p>
                                </div>
                                <div className={styles.headerRow}>
                                    <div>{product.name}</div>
                                    <div>Price: {product.price}</div>
                                    <div>Quantity: {product.quantity}</div>
                                </div>
                                <div className={styles.subtot} style={{gap: "1vw"}}>
                                    <div>SubTotal</div>
                                    <div>{(parseFloat(product.price.replace('$', '')) * product.quantity).toFixed(2)}$</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.promoSection}>
                        <input
                            type="text"
                            placeholder="Code promo"
                            value={promoCode}
                            onChange={(e) => setPromoCode(e.target.value)}
                        />
                        <button>APPLIQUER LE CODE PROMO</button>
                        <Link to="/Confirm">
                            <button style={{marginTop: "10px"}} className={styles.updateButton}>CONFIRM</button>
                        </Link>
                    </div>
                </div>
                <div className={styles.footer}></div>
            </div>
        </>
    );
}

export default Cartphone;
