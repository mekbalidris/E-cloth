import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Navbarphone from './Navbar/Navbarphone';
import Homephone from './Home/Homephone';
import Home from './Home/Home'; // Ensure this component has content
import Shop from './Shop/Shop';
import OnSale from './OnSale/OnSale';
import NewArrivals from './NewArrivals/NewArrivals';
import Shopphone from './Shop/Shopphone';
import Cart from './Cart/Cart';
import Modalphone from './Modal/Modal.phone';
import Cartphone from './Cart/Cartphone';
import Confirmphone from './Confirm/Confirmphone';
import Thankphone from './Thank/Thankphone'

function App() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1100);
    const [cartCount, setCartCount] = useState(0);
    const [cartProducts, setCartProducts] = useState([]);
    const [sizeProduct, setSizeProduct] = useState([]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1100);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Router>
            <div className='main'>
                {isMobile ? (
                    <div className='mob'>
                        <Navbarphone cartCount={cartCount} />
                        <Routes>
                            
                            <Route basename="/E-Cloth" path="/E-Cloth" element={<Homephone />} />
                            <Route path="/Shop" element={<Shopphone />} />
                            <Route path="/Modal" element={<Modalphone setCartProducts={setCartProducts} setCartCount={setCartCount} setSizeProduct={setSizeProduct} />} />
                            <Route path="/Cart" element={<Cartphone sizeProduct={sizeProduct} cartProducts={cartProducts} cartCount={cartCount} setCartProducts={setCartProducts} setCartCount={setCartCount}/>} />
                            <Route path="/Thanks" element={<Thankphone />} />
                            <Route path="/Confirm" element={<Confirmphone cartProducts={cartProducts} />} />
                            <Route path="/On-Sale" element={<OnSale />} />
                            <Route path="/New-Arrivals" element={<NewArrivals />} />
                        </Routes>
                    </div>
                ) : (
                    <div className='desk'>
                        <Navbar cartCount={cartCount} />
                        <Routes>
                            
                            <Route basename="/E-Cloth" path="/E-Cloth" element={<Home />} />
                            <Route path="/Shop" element={<Shop cartCount={cartCount} setCartCount={setCartCount} setCartProducts={setCartProducts} setSizeProduct={setSizeProduct} />} />
                            <Route path="/On-Sale" element={<OnSale />} />
                            <Route path="/New-Arrivals" element={<NewArrivals />} />
                            <Route path="/Cart" element={<Cart sizeProduct={sizeProduct} cartProducts={cartProducts} cartCount={cartCount} />} />
                            <Route path="/Thanks" element={<Thankphone />} />
                            <Route path="/Confirm" element={<Confirmphone cartProducts={cartProducts} />} />
                        </Routes>
                    </div>
                )}
            </div>
        </Router>
    );
}

export default App;
