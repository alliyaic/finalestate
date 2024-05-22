import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Card from '../components/Сard';
import Products from '../components/Products';
import './Mens.css';
//import Navbar from '../components/Navbar';

function Mens() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        GetData()
    }, [])

    function GetData() {
        axios.get('https://fakestoreapi.com/products?limit=5')
            .then(response => {
                setProducts(response.data);
            })
            .catch (error => {
                console.error(error);
            });
    }

    const all = products.map((item, index) => {

        return (
            <Products key={index} data={item} />
        )
    })

    return (
        <div className="list">
            {all}
        </div>
    );
}

export default Mens;