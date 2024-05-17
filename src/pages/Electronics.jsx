import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Card from '../components/card';
import Products from '../components/products';
import './Electronics.css';
//import Navbar from '../components/Navbar';


function Electronics() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        GetData()
    }, [])

    function GetData() {
        axios.get('https://fakestoreapi.com/products/category/electronics')
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

export default Electronics;