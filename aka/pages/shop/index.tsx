import React from 'react'
import Shop from '../../components/shop/Shop'

import { GetStaticProps,NextPage } from 'next'
import axios from 'axios';
export const getStaticProps: GetStaticProps = async (context) => {
  const res = await axios.get("http://localhost:8080/product/getall");
  const  results : any = await res.data;


  return {
    props: {
      products: results,
    },
  };
};
const shop :NextPage<{ products: any }> = ({ products }) => {
  return (
    <Shop products={products}></Shop>
  )
}

export default shop