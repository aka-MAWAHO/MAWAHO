import React from 'react'
import Shop from '../../components/shop/Shop'

import { GetStaticProps,NextPage } from 'next'
import axios from 'axios';
export const getStaticProps: GetStaticProps = async (context) => {
  const res = await axios.get("http://localhost:8080/product/getall");
  const  results : any = await res.data;

  const secondres = await axios.get("http://localhost:8080/product/getall");
  const  secondresults : any = await res.data;

  return {
    props: {
      products: results,
    },
  };
};
import  Admin from '../components/admin/admin'
const admin :NextPage<{ products: any }> = ({ products }) => {

  return (
    <Admin></Admin>
  )
}

export default admin