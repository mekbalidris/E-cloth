import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import styles from './Confirmphone.module.css';

function Confirmphone({ cartProducts }) {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [wilaya, setWilaya] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate();

    
    useEffect(() => {
        const total = cartProducts.reduce((acc, product) => {
            return acc + parseFloat(product.price.replace('$', '')) * product.quantity;
        }, 0);
        setTotalPrice(total.toFixed(2));
    }, [cartProducts]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        
        if (name && address && phone && wilaya) {
            
            alert(`Order submitted!\nName: ${name}\nAddress: ${address}\nPhone: ${phone}\nWilaya: ${wilaya}`);
            
            navigate('/Thanks'); 
        } else {
            alert('Please fill in all the fields before submitting.');
        }
    };

    return (
        <>
        <div className={styles.container}>
        <div className={styles.formContainer}>
            <h2>Order Form</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label>
                    Name:
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required
                    />
                </label>
                <label>
                    Address:
                    <input 
                        type="text" 
                        value={address} 
                        onChange={(e) => setAddress(e.target.value)} 
                        required
                    />
                </label>
                <label>
                    Phone Number:
                    <input 
                        type="tel" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                        required
                    />
                </label>
                <label>
                    Wilaya:
                    <input 
                        type="text" 
                        value={wilaya} 
                        onChange={(e) => setWilaya(e.target.value)} 
                        required
                    />
                </label>
                <div className={styles.totalPrice}>
                    <strong>Total Price:</strong> {totalPrice}$
                </div>
                <button type="submit" className={styles.submitButton}>Submit Order</button>
            </form>
        </div>
        <div className={styles.footer}></div>
        </div>
        </>
    );
}

export default Confirmphone;
