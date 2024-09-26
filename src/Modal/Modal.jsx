import styles from './Modal.module.css';
import { useState } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from 'framer-motion';

function AmountCounter({ count, setCount }) {
    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };
  
    const decrement = () => {
        if (count > 1) {
            setCount(prevCount => prevCount - 1);
        }
    };

    return (
        <div className={styles.amountCounter}>
            <button className={styles.decrement} onClick={decrement}>
                -
            </button>
            <div className={styles.countDisplay}>
                {count}
            </div>
            <button className={styles.increment} onClick={increment}>
                +
            </button>
        </div>
    );
}

function Modal({ setCartCount, setCartProducts, setSizeProduct, product, closeModal }) {

    const [Count, setCount] = useState(0);
    const [Size, setSize] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);

    if (!product) return null;

    const NextArrow = ({ onClick }) => {
        return (
            <div 
            className={`${styles.customArrow} ${styles.nextArrow}`}  
                onClick={onClick}
            >
                &#10095; {/* Unicode character for right arrow */}
            </div>
        );
    };
    
    // Custom Prev Arrow Component
    const PrevArrow = ({ onClick }) => {
        return (
            <div 
            className={`${styles.customArrow} ${styles.prevArrow}`} 
                onClick={onClick}
            >
                &#10094; {/* Unicode character for left arrow */}
            </div>
        );
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <NextArrow />,  // Add custom next arrow
        prevArrow: <PrevArrow />   // Add custom prev arrow
    };

    const handleSizeClick = (size) => {
        setSelectedSize(size);
        setSize(size);
    };

    const addToCart = () => {
        if (!Size || Count === 0) {
            alert("Please select a size and quantity.");
            return;
        }
        
        const productToAdd = {
            id: product.id,
            name: product.prods,
            price: product.price,
            size: Size,
            quantity: Count,
            image: product.image[0],
        };

        setCartProducts(prevProducts => [...prevProducts, productToAdd]);
        setCartCount(prevCount => prevCount + Count);
    };

    return (
        <div className={styles.modalBackground}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={closeModal}>X</button>
                <div className={styles.prodname}>{product.prods}</div>
                <Slider {...sliderSettings} className={styles.imageSlider}>
                    {product.image.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Product Image ${index}`} className={styles.productImage} />
                        </div>
                    ))}
                </Slider>
                <div className={styles.information}>
                    <div className={styles.description}>
                        <div className={styles.desc}>Description:</div>
                        <div className={styles.lorem}>
                            Tempor anim deserunt qui qui excepteur minim proident velit veniam est. Ullamco deserunt magna culpa consequat.
                        </div>
                    </div>
                    <div className={styles.options} style={{ boxShadow: "0px 2px 8px black" }}>
                        <div style={{ fontFamily: "Open Sans", fontWeight: "bold", fontSize: "2vw" }}>
                            Price: {product.price}
                        </div>
                        <div className={styles.size}>
                            <div style={{ fontFamily: "Open Sans", fontWeight: "bold", fontSize: "2vw" }}>Size:</div>
                            <div
                                className={styles.number}
                                onClick={() => handleSizeClick(39)}
                                style={{ backgroundColor: selectedSize === 39 ? 'grey' : 'transparent' }}
                            >
                                39
                            </div>
                            <div
                                className={styles.number}
                                onClick={() => handleSizeClick(40)}
                                style={{ backgroundColor: selectedSize === 40 ? 'grey' : 'transparent' }}
                            >
                                40
                            </div>
                            <div
                                className={styles.number}
                                onClick={() => handleSizeClick(41)}
                                style={{ backgroundColor: selectedSize === 41 ? 'grey' : 'transparent' }}
                            >
                                41
                            </div>
                            <div
                                className={styles.number}
                                onClick={() => handleSizeClick(42)}
                                style={{ backgroundColor: selectedSize === 42 ? 'grey' : 'transparent' }}
                            >
                                42
                            </div>
                            <div
                                className={styles.number}
                                onClick={() => handleSizeClick(43)}
                                style={{ backgroundColor: selectedSize === 43 ? 'grey' : 'transparent' }}
                            >
                                43
                            </div>
                        </div>
                        <div className={styles.ammount}>
                            <AmountCounter count={Count} setCount={setCount} />
                        </div>
                    </div>
                    <div className={styles.buy}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                            style={{
                                color: 'white',
                                backgroundColor: 'green',
                                padding: '1vw',
                                fontSize: '2.5vw',
                                borderRadius: '50px',
                                cursor: 'pointer',
                            }}
                            onClick={addToCart}
                        >
                            Add To Cart
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
