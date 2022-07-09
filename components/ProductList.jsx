import React from 'react'
import styles from '../styles/ProductList.module.css'
import ProductCard from './ProductCard.jsx'
const ProductList = ({productList}) => {
  return (
    <div className={styles.container}>
        <p className={styles.desc}>
            Hurry Up! Sale ending soon...
        </p>
        <div className={styles.wrapper}>
        {productList.map((x)=> <ProductCard product={x} key={x._id}  />
        )
        }
        </div>
    </div>
  )
}

export default ProductList