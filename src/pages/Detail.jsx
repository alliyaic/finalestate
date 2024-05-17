import React from 'react'
import {useEffect, useState} from 'react';
import axios from 'axios';
function Detail(){
    console.log();
    const [products, setProducts] = useState([])

    useEffect(() => {
        GetData()
    }, [])

    function GetData() {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch (error => {
                console.error(error);
            });
    }
    console.log(products);

  return (
    <div></div>
  )
}

export default Detail;