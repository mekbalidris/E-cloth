import Product from 'C:/Users/idris/OneDrive/Desktop/second-react/my-react-app/src/Product/Product.jsx'
import shoe from './photos/shoe.png'
import styles from './Home.module.css'
import cover from './photos/cover.png'

function Home() {

    const products = [
        {id: 1,image: shoe,prods: 'Shoe 1',price: '999$',gender: 'female'},
        {id: 3,image: shoe,prods: 'Shoe 1',price: '999$',gender: 'male'},
        {id: 2,image: shoe,prods: 'Shoe 1',price: '999$',gender: 'female'},
        {id: 4,image: shoe,prods: 'Shoe 1',price: '999$',gender: 'male'},
        {id: 5,image: shoe,prods: 'Shoe 1',price: '999$',gender: 'female'},
        {id: 6,image: shoe,prods: 'Shoe 1',price: '999$',gender: 'male'},
        {id: 7,image: shoe,prods: 'Shoe 1',price: '999$',gender: 'female'},
        {id: 8,image: shoe,prods: 'Shoe 1',price: '999$',gender: 'male'},
        {id: 9,image: shoe,prods: 'Shoe 1',price: '999$',gender: 'female'},
        {id: 10,image: shoe,prods: 'Shoe 1',price: '999$',gender: 'male'},
        {id: 11,image: shoe,prods: 'Shoe 1',price: '999$',gender: 'female'},
        {id: 12,image: shoe,prods: 'Shoe 1',price: '999$',gender: 'male'},
        {id: 13,image: shoe,prods: 'Shoe 1',price: '999$',gender: 'female'},
        {id: 14,image: shoe,prods: 'Shoe 1',price: '999$',gender: 'male'},
        {id: 15,image: shoe,prods: 'Shoe 1',price: '999$',gender: 'female'},
        {id: 16,image: shoe,prods: 'Shoe 1',price: '999$',gender: 'male'},
        {id: 17,image: shoe,prods: 'Shoe 1',price: '999$',gender: 'female'},

    ];

    return (
        <>
        <div className={styles.main}>
        <div className={styles.first}>
            <div className={styles.floatplace}>
                <div><img className={styles.floating} src={shoe} /></div>
            </div>
            <div className={styles.imgspace}><img className={styles.cover} src={cover}/>
        </div>
        <div className={styles.mid}>E-Cloth</div>
        </div>
            {products.map(product => (
                <div key={product.id}><Product
                    image={product.image}
                    prods={product.prods}
                    gender={product.gender}
                /></div>
            ))}
        </div>
        </>
    );
}

export default Home;