import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from 'axios';
import {useDispatch} from 'react-redux'

import { addProduct } from "../../redux/cartSlice";

const Product = ({product}) => {

  const [quantity, setQuantity] = useState(1);
  const [productPrice, setProductPrice] = useState(product.price);

  const dispatch = useDispatch();

  const handlePrice = (x) =>{
    setProductPrice(x*product.price);
  }
  
  const handleClick = () => {
      dispatch(addProduct({...product, productPrice, quantity}));
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={product.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{product.title}</h1>
        <span className={styles.price}>₹{productPrice}</span>
        <p className={styles.desc}>{product.desc}</p>
       
        <div className={styles.add}>
            <input type="number" defaultValue={1} className={styles.quantity} onChange={(e) => {setQuantity(e.target.value); handlePrice(e.target.value);}}/>
            <button className={styles.button} onClick={handleClick}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({params}) =>{
  const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);
  return {
    props:{
      product: res.data,
    },
  };
};

export default Product;