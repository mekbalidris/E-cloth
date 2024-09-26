import Product from 'C:/Users/idris/OneDrive/Desktop/second-react/my-react-app/src/Product/Product.jsx'
import shoe from './photos/shoe.png'
import styles from './Homephone.module.css'
import Tshirt from './photos/Tshirt.png'
import jean from './photos/jean.png'


function Homephone() {

    const products = [
        {id: 1,image: shoe,prods: 'Shoe 1',price: '111$',gender: 'female'},
        {id: 3,image: shoe,prods: 'Shoe 2',price: '222$',gender: 'male'},
        {id: 2,image: shoe,prods: 'Shoe 3',price: '333$',gender: 'female'},
        {id: 4,image: shoe,prods: 'Shoe 4',price: '444$',gender: 'male'},
        {id: 5,image: shoe,prods: 'Shoe 5',price: '555$',gender: 'female'},
        {id: 6,image: shoe,prods: 'Shoe 6',price: '666$',gender: 'male'},
        {id: 7,image: shoe,prods: 'Shoe 7',price: '777$',gender: 'female'},
        {id: 8,image: shoe,prods: 'Shoe 8',price: '888$',gender: 'male'},
        {id: 9,image: shoe,prods: 'Shoe 9',price: '999$',gender: 'female'},
        {id: 10,image: shoe,prods: 'Shoe 10',price: '1111$',gender: 'male'},
        {id: 11,image: shoe,prods: 'Shoe 11',price: '2222$',gender: 'female'},
        {id: 12,image: shoe,prods: 'Shoe 12',price: '3333$',gender: 'male'},
        {id: 13,image: shoe,prods: 'Shoe 13',price: '4444$',gender: 'female'},
        {id: 14,image: shoe,prods: 'Shoe 14',price: '5555$',gender: 'male'},
        {id: 15,image: shoe,prods: 'Shoe 15',price: '6666$',gender: 'female'},
        {id: 16,image: shoe,prods: 'Shoe 16',price: '7777$',gender: 'male'},
        {id: 17,image: shoe,prods: 'Shoe 17',price: '8888$',gender: 'female'},

    ];

    return (
        <div className={styles.main}>
        <div className={styles.first}>
            <div className={styles.floatplace}>
            <span className={styles.find}> Find </span> Clothes That Fit Your <span className={styles.style}> Style </span>
            </div>
        </div>
            {products.map(product => (
                <div key={product.id} className={styles.card}><Product
                    image={product.image}
                    prods={product.prods}
                    ammount={product.ammount}
                    gender={product.gender}
                /></div>
            ))}
        </div>
    );
}

export default Homephone;