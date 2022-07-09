import React from 'react';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import Link from 'next/link'

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src='/img/telephone.png' height='32' width='32' />
        </div>
        <div className={styles.text}>
        <div className={styles.text}>
          Order Now!
        </div>
        <div className={styles.text}>
          +91-9517132558
        </div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
        <div className={styles.logo}>
        <Image src='/img/logo.png' width='160' height='50' />
         </div>
         <Link href='/'>
         <li className={styles.listItem} >Home</li>
         </Link>
          <li className={styles.listItem}>Menu</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <Link href='/cart' >
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src='/img/cart.png'  width='30' height='30'/>
          <div className={styles.counter} >{quantity}</div>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default Navbar