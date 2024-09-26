import React, { useState } from 'react';
import styles from './Cart.module.css';

function Cart({ cartProducts, cartCount }) {
    const [promoCode, setPromoCode] = useState('');

    return (
        <>
            <div className={styles.container}>
                <div className={styles.steps}>
                    <div>Cart</div>
                    <div>→</div>
                    <div>Confirm</div>
                    <div>→</div>
                    <div>Finish</div>
                </div>

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
                                    <img src={product.image} alt={product.name} className={styles.prodimg} />
                                    <p>{product.name}</p>
                                    <p>Size: {product.size}</p>
                                </div>
                                <div>{product.price}</div>
                                <div className={styles.quantity}>
                                    {product.quantity}
                                </div>
                                <div>{(parseFloat(product.price.replace('$', '')) * product.quantity).toFixed(2)}$</div>
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
                        <button className={styles.updateButton}>CONFIRM</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;
