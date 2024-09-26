import styles from './Modal.phone.module.css';
import { useState } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useLocation } from 'react-router-dom';

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

function Modalphone({setCartCount, setSizeProduct, setCartProducts}){

    const location = useLocation();
    const product = location.state?.product;
    const [Size, setSize] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);

    const [count, setCount] = useState(1);

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
        if (!Size) {
            alert("Please select a size.");
            return;
        }

        const productToAdd = {
            id: product.id,
            name: product.prods,
            price: product.price,
            size: Size,
            quantity: count,
            image: product.image[0],
        };

        setCartProducts(prevProducts => [...prevProducts, productToAdd]);
        setCartCount(prevCount => prevCount + count);
        alert("Product added to cart!");
    };
    


    return (
        <>

        <div className={styles.modalContainer}>
    {product ? (
        <>
            <div className={styles.productDetails}>
                <div><h2>{product.prods}</h2></div>
                <div><p>Price: {product.price}</p></div>
                <div><p>Gender: {product.gender}</p></div>
                <div>
                <Slider {...sliderSettings}>
                {product.image.map((img, index) => (
                    <div key={index}>
                        <img src={img} alt={`Slide ${index}`} />
                    </div>
                ))}
                </Slider>
                </div>
            </div>
            <AmountCounter count={count} setCount={setCount} />
            <div className={styles.size}>
            <div style={{ fontFamily: "Open Sans", fontWeight: "bold", fontSize: "5vw" }}>Size:</div>
            <div
              className={styles.number}
              onClick={() => handleSizeClick(39)}
              style={{ backgroundColor: selectedSize === 39 ? 'grey' : 'transparent',border: "1px solid black",borderRadius: "50px"}}
            >
              39
            </div>
            <div
              className={styles.number}
              onClick={() => handleSizeClick(40)}
              style={{ backgroundColor: selectedSize === 40 ? 'grey' : 'transparent',border: "1px solid black",borderRadius: "50px"}}
            >
              40
            </div>
            <div
              className={styles.number}
              onClick={() => handleSizeClick(41)}
              style={{ backgroundColor: selectedSize === 41 ? 'grey' : 'transparent',border: "1px solid black",borderRadius: "50px"}}
            >
              41
            </div>
            <div
              className={styles.number}
              onClick={() => handleSizeClick(42)}
              style={{ backgroundColor: selectedSize === 42 ? 'grey' : 'transparent',border: "1px solid black",borderRadius: "50px"}}
            >
              42
            </div>
            <div
              className={styles.number}
              onClick={() => handleSizeClick(43)}
              style={{ backgroundColor: selectedSize === 43 ? 'grey' : 'transparent',border: "1px solid black",borderRadius: "50px"}}
            >
              43
            </div>

          </div>

          <div className={styles.buy}>
          <button
              style={{
                  marginTop: '5vw',
                  color: 'white',
                  backgroundColor: 'green',
                  padding: '1vw',
                  fontSize: '5vw',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  width: '29vw',
              }}
              onClick={addToCart}
          >
              Add To Cart
          </button>

          <button
              style={{
                  marginTop: '5vw',
                  marginLeft: '20vw',
                  color: 'white',
                  backgroundColor: 'green',
                  padding: '1vw',
                  fontSize: '5vw',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  width: '25vw',
              }}
              onClick={addToCart}
          >
              Buy Now
          </button>
        </div>
            
        </>
    ) : (
        <p>No product data available</p>
    )}
    
    </div>
        
        <div className={styles.description}>
              <h2 style={{fontSize:"5vmax"}}>Description</h2>
              <p style={{fontSize:"3vmax",marginTop:"15px"}}>Occaecat esse sit aliqua ea est consequat ex cillum. Veniam exercitation sunt ipsum nulla exercitation id aliquip elit sunt ea eu duis Lorem. Nostrud nulla ex nulla aliqua nostrud commodo ut est officia non sunt sint. Dolore nisi cupidatat deserunt eiusmod qui laborum. Do elit consectetur Lorem Lorem.</p>
        </div>

        <div className={styles.footer}></div>

        </>
    );
}


export default Modalphone;