import React, { useState } from 'react';
import styles from './Cartphone.module.css';

function Cartphone({ cartProducts, cartCount }) {
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

                    <div className={styles.productRows}>
                        {cartProducts.map((product) => (
                            <div key={product.id} className={styles.productRow}>
                                <div className={styles.product}>
                                    <img src={product.image} alt={product.name} className={styles.prodimg} />
                                    <p>Size: {product.size}</p>
                                </div>
                                <div className={styles.headerRow}>
                                <div>{product.name}</div>
                                <div>Price: {product.price}</div>
                                <div>
                                    Quantity: {product.quantity}
                                </div>
                                </div>
                                <div className={styles.subtot} style={{gap:"1vw"}}>
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
                        <button className={styles.updateButton} style={{marginTop:"10px"}}>CONFIRM</button>
                    </div>
                </div>
                <div className={styles.footer}></div>
            </div>
        </>
    );
}

export default Cartphone;
