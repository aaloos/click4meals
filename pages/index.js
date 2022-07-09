import axios from 'axios';
import Head from 'next/head';
import Featured from '../components/Featured';
import ProductList from '../components/ProductList';



export default function Home({productList}) {
  return (
    <div>
      <Head>
        <title>Click4Food</title>
        <meta name="description" content="Nit durgapur food ordering and delivery app." />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </Head>
      <Featured />
      <ProductList productList = {productList} />
    </div>
  );
};

export const getServerSideProps = async () =>{
  const res = await axios.get(`http://localhost:3000/api/products`);
  return {
    props:{
      productList: res.data,
    },
  };
};