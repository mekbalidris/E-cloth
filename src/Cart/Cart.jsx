import React, { useState } from 'react';
import styles from './Cart.module.css';
import cart from 'C:/Users/idris/OneDrive/Desktop/second-react/my-react-app/src/Navbar/photos/chart.png';
import { Link } from 'react-router-dom';

function Cart({ cartProducts, cartCount }) {
    const [promoCode, setPromoCode] = useState('');

    return (
        <>
            <div className={styles.container}>
                <div className={styles.steps}>
                    <div>
                        Cart <img src={cart} style={{ height: '3vw' }} alt="cart icon" />
                    </div>
                </div>
    
                {cartProducts.length === 0 ? (
                    <div className={styles.empty}>Empty :(</div>
                ) : (
                    <>
                        <div className={styles.table}>
                            <div className={styles.headerRow}>
                                <div>Product</div>
                                <div>Price</div>
                                <div>Quantity</div>
                                <div>Sub-total</div>
                            </div>
    
                            <div className={styles.productRows}>
                                {cartProducts.map((product) => (
                                    <div key={product.id} className={styles.productRow}>
                                        <div className={styles.product}>
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className={styles.prodimg}
                                            />
                                            <p>{product.name}</p>
                                            <p>Size: {product.size}</p>
                                        </div>
                                        <div>{product.price}</div>
                                        <div className={styles.quantity}>{product.quantity}</div>
                                        <div>
                                            {(
                                                parseFloat(product.price.replace('$', '')) *
                                                product.quantity
                                            ).toFixed(2)}
                                            $
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
                                <button>APPLY PROMO CODE</button>
                                <Link to="/Confirm"><button className={styles.updateButton}>CONFIRM</button></Link>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );

}
export default Cart;
