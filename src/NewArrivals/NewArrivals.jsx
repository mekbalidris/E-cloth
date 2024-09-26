import Product from 'C:/Users/idris/OneDrive/Desktop/second-react/my-react-app/src/Product/Product.jsx'
import shoe from 'C:/Users/idris/OneDrive/Desktop/second-react/my-react-app/src/Home/photos/shoe.png'
import styles from './NewArrivals.module.css'

function NewArrivals() {

    const products = [
        {id: 1,image: shoe,prods: 'Shoe 1',price: '999$',gender: 'female',old: '111$'},
        {id: 3,image: shoe,prods: 'Shoe 1',price: '999$',gender: 'male',old: '111$'},
        {id: 2,image: shoe,prods: 'Shoe 1',price: '999$',gender: 'female',old: '111$'},
        {id: 4,image: shoe,prods: 'Shoe 1',price: '999$',gender: 'male',old: '111$'},
        {id: 5,image: shoe,prods: 'Shoe 1',price: '999$',gender: 'female',old: '111$'},
        {id: 6,image: shoe,prods: 'Shoe 1',price: '999$',gender: 'male',old: '111$'},
        {id: 7,image: shoe,prods: 'Shoe 1',price: '999$',gender: 'female',old: '111$'},
        {id: 8,image: shoe,prods: 'Shoe 1',price: '999$',gender: 'male',old: '111$'},
        {id: 9,image: shoe,prods: 'Shoe 1',price: '999$',gender: 'female',old: '111$'},
        {id: 10,image: shoe,prods: 'Shoe 1',price: '999$',gender: 'male',old: '111$'},
        {id: 11,image: shoe,prods: 'Shoe 1',price: '999$',gender: 'female',old: '111$'},
        {id: 12,image: shoe,prods: 'Shoe 1',price: '999$',gender: 'male',old: '111$'},
        {id: 13,image: shoe,prods: 'Shoe 1',price: '999$',gender: 'female',old: '111$'},
        {id: 14,image: shoe,prods: 'Shoe 1',price: '999$',gender: 'male',old: '111$'},
        {id: 15,image: shoe,prods: 'Shoe 1',price: '999$',gender: 'female',old: '111$'},
        {id: 16,image: shoe,prods: 'Shoe 1',price: '999$',gender: 'male',old: '111$'},
        {id: 17,image: shoe,prods: 'Shoe 1',price: '999$',gender: 'female',old: '111$'},

    ];

    return (
        <>
        
        <div className={styles.main}>
        <div className={styles.Title}>
            <div className={styles.arrival}>New Arrivals</div>
        </div>
            {products.map(product => (
                <div key={product.id}>
                <Product
                    image={product.image}
                    prods={product.prods}
                    ammount={product.price}
                    gender={product.gender}
                /></div>
            ))}
        </div>
        </>
    );
}

export default NewArrivals;