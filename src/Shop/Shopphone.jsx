import styles from './Shopphone.module.css'
import Product from '../Product/Product'
import shoe from './photos/shoe.png'
import jean from './photos/jean.png'
import Tshirt from './photos/Tshirt.png'
import boot from './photos/boot.png'
import hat from './photos/hat.png'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';



function Shop() {

    const boots = [
        {id: 1,cover: boot,image: [boot,boot,boot,boot,boot,boot,boot],prods: 'boot 1',price: '111$',gender: 'female'},
        {id: 3,cover: boot,image: [boot,boot,boot,boot,boot,boot,boot],prods: 'boot 2',price: '222$',gender: 'male'},
        {id: 2,cover: boot,image: [boot,boot,boot,boot,boot,boot,boot],prods: 'boot 3',price: '333$',gender: 'female'},
        {id: 4,cover: boot,image: [boot,boot,boot,boot,boot,boot,boot],prods: 'boot 4',price: '444$',gender: 'male'},
        {id: 5,cover: boot,image: [boot,boot,boot,boot,boot,boot,boot],prods: 'boot 5',price: '555$',gender: 'female'},
        {id: 6,cover: boot,image: [boot,boot,boot,boot,boot,boot,boot],prods: 'boot 6',price: '666$',gender: 'male'},
        {id: 7,cover: boot,image: [boot,boot,boot,boot,boot,boot,boot],prods: 'boot 7',price: '777$',gender: 'female'},
        {id: 8,cover: boot,image: [boot,boot,boot,boot,boot,boot,boot],prods: 'boot 8',price: '888$',gender: 'male'},
        {id: 9,cover: boot,image: [boot,boot,boot,boot,boot,boot,boot],prods: 'boot 9',price: '999$',gender: 'female'},
        {id: 10,cover: boot,image: [boot,boot,boot,boot,boot,boot,boot],prods: 'boot 10',price: '1111$',gender: 'male'},
        {id: 11,cover: boot,image: [boot,boot,boot,boot,boot,boot,boot],prods: 'boot 11',price: '2222$',gender: 'female'},
        {id: 12,cover: boot,image: [boot,boot,boot,boot,boot,boot,boot],prods: 'boot 12',price: '3333$',gender: 'male'},
        {id: 13,cover: boot,image: [boot,boot,boot,boot,boot,boot,boot],prods: 'boot 13',price: '4444$',gender: 'female'},
        {id: 14,cover: boot,image: [boot,boot,boot,boot,boot,boot,boot],prods: 'boot 14',price: '5555$',gender: 'male'},
        {id: 15,cover: boot,image: [boot,boot,boot,boot,boot,boot,boot],prods: 'boot 15',price: '6666$',gender: 'female'},
        {id: 16,cover: boot,image: [boot,boot,boot,boot,boot,boot,boot],prods: 'boot 16',price: '7777$',gender: 'male'},
        {id: 17,cover: boot,image: [boot,boot,boot,boot,boot,boot,boot],prods: 'boot 17',price: '8888$',gender: 'female'},
    ];

    const shoes = [
        {id: 1,cover: shoe,image: [shoe,shoe,shoe,shoe,shoe,shoe],prods: 'Shoe 1',price: '111$',gender: 'female'},
        {id: 3,cover: shoe,image: [shoe,shoe,shoe,shoe,shoe,shoe],prods: 'Shoe 2',price: '222$',gender: 'male'},
        {id: 2,cover: shoe,image: [shoe,shoe,shoe,shoe,shoe,shoe],prods: 'Shoe 3',price: '333$',gender: 'female'},
        {id: 4,cover: shoe,image: [shoe,shoe,shoe,shoe,shoe,shoe],prods: 'Shoe 4',price: '444$',gender: 'male'},
        {id: 5,cover: shoe,image: [shoe,shoe,shoe,shoe,shoe,shoe],prods: 'Shoe 5',price: '555$',gender: 'female'},
        {id: 6,cover: shoe,image: [shoe,shoe,shoe,shoe,shoe,shoe],prods: 'Shoe 6',price: '666$',gender: 'male'},
        {id: 7,cover: shoe,image: [shoe,shoe,shoe,shoe,shoe,shoe],prods: 'Shoe 7',price: '777$',gender: 'female'},
        {id: 8,cover: shoe,image: [shoe,shoe,shoe,shoe,shoe,shoe],prods: 'Shoe 8',price: '888$',gender: 'male'},
        {id: 9,cover: shoe,image: [shoe,shoe,shoe,shoe,shoe,shoe],prods: 'Shoe 9',price: '999$',gender: 'female'},
        {id: 10,cover: shoe,image: [shoe,shoe,shoe,shoe,shoe,shoe],prods: 'Shoe 10',price: '1111$',gender: 'male'},
        {id: 11,cover: shoe,image: [shoe,shoe,shoe,shoe,shoe,shoe],prods: 'Shoe 11',price: '2222$',gender: 'female'},
        {id: 12,cover: shoe,image: [shoe,shoe,shoe,shoe,shoe,shoe],prods: 'Shoe 12',price: '3333$',gender: 'male'},
        {id: 13,cover: shoe,image: [shoe,shoe,shoe,shoe,shoe,shoe],prods: 'Shoe 13',price: '4444$',gender: 'female'},
        {id: 14,cover: shoe,image: [shoe,shoe,shoe,shoe,shoe,shoe],prods: 'Shoe 14',price: '5555$',gender: 'male'},
        {id: 15,cover: shoe,image: [shoe,shoe,shoe,shoe,shoe,shoe],prods: 'Shoe 15',price: '6666$',gender: 'female'},
        {id: 16,cover: shoe,image: [shoe,shoe,shoe,shoe,shoe,shoe],prods: 'Shoe 16',price: '7777$',gender: 'male'},
        {id: 17,cover: shoe,image: [shoe,shoe,shoe,shoe,shoe,shoe],prods: 'Shoe 17',price: '8888$',gender: 'female'},
    ];

    const tshirts = [
        {id: 1,cover: Tshirt,image: [Tshirt,Tshirt,Tshirt,Tshirt,Tshirt,Tshirt,Tshirt],prods: 'Tshirt 1',price: '111$',gender: 'female'},
        {id: 3,cover: Tshirt,image: [Tshirt,Tshirt,Tshirt,Tshirt,Tshirt,Tshirt,Tshirt],prods: 'Tshirt 2',price: '222$',gender: 'male'},
        {id: 2,cover: Tshirt,image: [Tshirt,Tshirt,Tshirt,Tshirt,Tshirt,Tshirt,Tshirt],prods: 'Tshirt 3',price: '333$',gender: 'female'},
        {id: 4,cover: Tshirt,image: [Tshirt,Tshirt,Tshirt,Tshirt,Tshirt,Tshirt,Tshirt],prods: 'Tshirt 4',price: '444$',gender: 'male'},
        {id: 5,cover: Tshirt,image: [Tshirt,Tshirt,Tshirt,Tshirt,Tshirt,Tshirt,Tshirt],prods: 'Tshirt 5',price: '555$',gender: 'female'},
        {id: 6,cover: Tshirt,image: [Tshirt,Tshirt,Tshirt,Tshirt,Tshirt,Tshirt,Tshirt],prods: 'Tshirt 6',price: '666$',gender: 'male'},
        {id: 7,cover: Tshirt,image: [Tshirt,Tshirt,Tshirt,Tshirt,Tshirt,Tshirt,Tshirt],prods: 'Tshirt 7',price: '777$',gender: 'female'},
        {id: 8,cover: Tshirt,image: [Tshirt,Tshirt,Tshirt,Tshirt,Tshirt,Tshirt,Tshirt],prods: 'Tshirt 8',price: '888$',gender: 'male'},
        {id: 9,cover: Tshirt,image: [Tshirt,Tshirt,Tshirt,Tshirt,Tshirt,Tshirt,Tshirt],prods: 'Tshirt 9',price: '999$',gender: 'female'},
        {id: 10,cover: Tshirt,image: [Tshirt,Tshirt,Tshirt,Tshirt,Tshirt,Tshirt,Tshirt],prods: 'Tshirt 10',price: '1111$',gender: 'male'},
        {id: 11,cover: Tshirt,image: [Tshirt,Tshirt,Tshirt,Tshirt,Tshirt,Tshirt,Tshirt],prods: 'Tshirt 11',price: '2222$',gender: 'female'},
        {id: 12,cover: Tshirt,image: [Tshirt,Tshirt,Tshirt,Tshirt,Tshirt,Tshirt,Tshirt],prods: 'Tshirt 12',price: '3333$',gender: 'male'},
        {id: 13,cover: Tshirt,image: [Tshirt,Tshirt,Tshirt,Tshirt,Tshirt,Tshirt,Tshirt],prods: 'Tshirt 13',price: '4444$',gender: 'female'},
        {id: 14,cover: Tshirt,image: [Tshirt,Tshirt,Tshirt,Tshirt,Tshirt,Tshirt,Tshirt],prods: 'Tshirt 14',price: '5555$',gender: 'male'},
        {id: 15,cover: Tshirt,image: [Tshirt,Tshirt,Tshirt,Tshirt,Tshirt,Tshirt,Tshirt],prods: 'Tshirt 15',price: '6666$',gender: 'female'},
        {id: 16,cover: Tshirt,image: [Tshirt,Tshirt,Tshirt,Tshirt,Tshirt,Tshirt,Tshirt],prods: 'Tshirt 16',price: '7777$',gender: 'male'},
        {id: 17,cover: Tshirt,image: [Tshirt,Tshirt,Tshirt,Tshirt,Tshirt,Tshirt,Tshirt],prods: 'Tshirt 17',price: '8888$',gender: 'female'},
    ];

    const hats = [
        {id: 1,cover: hat,image: [hat,hat,hat,hat,hat,hat,hat],prods: 'hat 1',price: '111$',gender: 'female'},
        {id: 3,cover: hat,image: [hat,hat,hat,hat,hat,hat,hat],prods: 'hat 2',price: '222$',gender: 'male'},
        {id: 2,cover: hat,image: [hat,hat,hat,hat,hat,hat,hat],prods: 'hat 3',price: '333$',gender: 'female'},
        {id: 4,cover: hat,image: [hat,hat,hat,hat,hat,hat,hat],prods: 'hat 4',price: '444$',gender: 'male'},
        {id: 5,cover: hat,image: [hat,hat,hat,hat,hat,hat,hat],prods: 'hat 5',price: '555$',gender: 'female'},
        {id: 6,cover: hat,image: [hat,hat,hat,hat,hat,hat,hat],prods: 'hat 6',price: '666$',gender: 'male'},
        {id: 7,cover: hat,image: [hat,hat,hat,hat,hat,hat,hat],prods: 'hat 7',price: '777$',gender: 'female'},
        {id: 8,cover: hat,image: [hat,hat,hat,hat,hat,hat,hat],prods: 'hat 8',price: '888$',gender: 'male'},
        {id: 9,cover: hat,image: [hat,hat,hat,hat,hat,hat,hat],prods: 'hat 9',price: '999$',gender: 'female'},
        {id: 10,cover: hat,image: [hat,hat,hat,hat,hat,hat,hat],prods: 'hat 10',price: '1111$',gender: 'male'},
        {id: 11,cover: hat,image: [hat,hat,hat,hat,hat,hat,hat],prods: 'hat 11',price: '2222$',gender: 'female'},
        {id: 12,cover: hat,image: [hat,hat,hat,hat,hat,hat,hat],prods: 'hat 12',price: '3333$',gender: 'male'},
        {id: 13,cover: hat,image: [hat,hat,hat,hat,hat,hat,hat],prods: 'hat 13',price: '4444$',gender: 'female'},
        {id: 14,cover: hat,image: [hat,hat,hat,hat,hat,hat,hat],prods: 'hat 14',price: '5555$',gender: 'male'},
        {id: 15,cover: hat,image: [hat,hat,hat,hat,hat,hat,hat],prods: 'hat 15',price: '6666$',gender: 'female'},
        {id: 16,cover: hat,image: [hat,hat,hat,hat,hat,hat,hat],prods: 'hat 16',price: '7777$',gender: 'male'},
        {id: 17,cover: hat,image: [hat,hat,hat,hat,hat,hat,hat],prods: 'hat 17',price: '8888$',gender: 'female'},
    ];

    const jeans = [
        {id: 1,cover:jean,image: [jean,jean,jean,jean,jean,jean,jean,jean],prods: 'jean 1',price: '111$',gender: 'female'},
        {id: 3,cover:jean,image: [jean,jean,jean,jean,jean,jean,jean,jean],prods: 'jean 2',price: '222$',gender: 'male'},
        {id: 2,cover:jean,image: [jean,jean,jean,jean,jean,jean,jean,jean],prods: 'jean 3',price: '333$',gender: 'female'},
        {id: 4,cover:jean,image: [jean,jean,jean,jean,jean,jean,jean,jean],prods: 'jean 4',price: '444$',gender: 'male'},
        {id: 5,cover:jean,image: [jean,jean,jean,jean,jean,jean,jean,jean],prods: 'jean 5',price: '555$',gender: 'female'},
        {id: 6,cover:jean,image: [jean,jean,jean,jean,jean,jean,jean,jean],prods: 'jean 6',price: '666$',gender: 'male'},
        {id: 7,cover:jean,image: [jean,jean,jean,jean,jean,jean,jean,jean],prods: 'jean 7',price: '777$',gender: 'female'},
        {id: 8,cover:jean,image: [jean,jean,jean,jean,jean,jean,jean,jean],prods: 'jean 8',price: '888$',gender: 'male'},
        {id: 9,cover:jean,image: [jean,jean,jean,jean,jean,jean,jean,jean],prods: 'jean 9',price: '999$',gender: 'female'},
        {id: 10,cover:jean,image: [jean,jean,jean,jean,jean,jean,jean,jean],prods: 'jean 10',price: '1111$',gender: 'male'},
        {id: 11,cover:jean,image: [jean,jean,jean,jean,jean,jean,jean,jean],prods: 'jean 11',price: '2222$',gender: 'female'},
        {id: 12,cover:jean,image: [jean,jean,jean,jean,jean,jean,jean,jean],prods: 'jean 12',price: '3333$',gender: 'male'},
        {id: 13,cover:jean,image: [jean,jean,jean,jean,jean,jean,jean,jean],prods: 'jean 13',price: '4444$',gender: 'female'},
        {id: 14,cover:jean,image: [jean,jean,jean,jean,jean,jean,jean,jean],prods: 'jean 14',price: '5555$',gender: 'male'},
        {id: 15,cover:jean,image: [jean,jean,jean,jean,jean,jean,jean,jean],prods: 'jean 15',price: '6666$',gender: 'female'},
        {id: 16,cover:jean,image: [jean,jean,jean,jean,jean,jean,jean,jean],prods: 'jean 16',price: '7777$',gender: 'male'},
        {id: 17,cover:jean,image: [jean,jean,jean,jean,jean,jean,jean,jean],prods: 'jean 17',price: '8888$',gender: 'female'},
    ];

    const [gender, setGender] = useState('');
    const [price, setPrice] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const [category, setCategory] = useState(shoes);
    const [filteredProducts, setFilteredProducts] = useState(shoes);
    const [pageTitle, setPageTitle] = useState('SHOES');
    const navigate = useNavigate();

    function HandleClick(product){
        navigate('/Modal', { state : { product } });
    }

    function handlePriceChange(e) {
        setPrice(e.target.value);
    }

    function handleGender(e) {
        setGender(e.target.value);
    }

    function handleSortChange(e) {
        const order = e.target.value;
        setSortOrder(order);

        let sortedProducts = [...filteredProducts];

        if (order === 'lowToHigh') {
            sortedProducts.sort((a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')));
        } else if (order === 'highToLow') {
            sortedProducts.sort((a, b) => parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', '')));
        }

        setFilteredProducts(sortedProducts);
    }

    function filterprice() {
        const maxPrice = parseFloat(price) || Infinity;

        const filtered = category.filter((prod) => {
            const productPrice = parseFloat(prod.price.replace('$', ''));
            return productPrice <= maxPrice && (!gender || prod.gender === gender);
        });

        setFilteredProducts(filtered);
    }

    function handleCategoryChange(newCategory) {
        setCategory(newCategory);
        setFilteredProducts(newCategory);
        setPrice('');
        setGender('');
        setSortOrder('');
    }

    return (
        <>
            <div className={styles.main}>
                <div className={styles.Pinfo}>
                    <div className={styles.page}>{pageTitle}</div>
                    <div className={styles.other}>
                        <div className={styles.opages} onClick={() => {handleCategoryChange(shoes);setPageTitle("SHOES")}}>Shoe</div>
                        <div className={styles.opages} onClick={() => {handleCategoryChange(boots);setPageTitle("BOOTS")}}>Boot</div>
                        <div className={styles.opages} onClick={() => {handleCategoryChange(jeans);setPageTitle("JEANS")}}>Jean</div>
                        <div className={styles.opages} onClick={() => {handleCategoryChange(tshirts);setPageTitle("T-SHIRTS")}}>T-shirt</div>
                        <div className={styles.opages} onClick={() => {handleCategoryChange(hats);setPageTitle("HATS")}}>Hat</div>
                    </div>
                </div>

                <div className={styles.options}>
                    <input
                        className={styles.price}
                        type="text"
                        placeholder="Max Price"
                        value={price}
                        onChange={handlePriceChange}
                    />

                    <select placeholder="gender" className={styles.gender} onChange={handleGender}>
                        <option value="">gender</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                    </select>

                    <select className={styles.sort} value={sortOrder} onChange={handleSortChange}>
                        <option value="">Sort Price</option>
                        <option value="lowToHigh">Low to High</option>
                        <option value="highToLow">High to Low</option>
                    </select>

                    <motion.button
                        whileHover={{ scale: 1.1, backgroundColor: 'rgb(161, 161, 161)' }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        onClick={filterprice}
                        style={{
                            border: '1px solid #ccc',
                            fontSize: '3vw',
                            borderRadius: '5px',
                            width: '13vw',
                            cursor: 'pointer',
                            fontFamily: 'Open Sans',
                            fontWeight: 'bold',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        Filter
                    </motion.button>
                </div>

                {filteredProducts.map(product => (
                    <div key={product.id} onClick={() => HandleClick(product)} >
                        <Product
                            image={product.cover}
                            prods={product.prods}
                            ammount={product.price}
                            gender={product.gender}
                        />
                    </div>
                ))}
                

            </div>
        </>
    );
}

export default Shop;