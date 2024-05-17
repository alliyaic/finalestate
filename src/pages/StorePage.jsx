
import { Link } from "react-router-dom"
import {useEffect, useState} from 'react';
import axios from 'axios';
import Card from '../components/card';
import Electronics from "../assets/store/phone.png";
import Jewellery from "../assets/store/jewell.jpeg";
import Mens from "../assets/store/mensclothes.jpg";
import Womens from "../assets/store/womens.jpeg";
import './Store.css';
//import Navbar from '../components/Navbar';


const images = [{
        image: Electronics,
        url: '/store/electronics'
    },
    {
        image: Jewellery, 
        url: '/store/jewelery'
    }, 
    {
        image: Mens, 
        url: '/store/mens'
    }, 
    {
        image: Womens, 
        url: '/store/womens'
    }]

function StorePage () {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getData()
    }, [])

    function getData() {
        axios.get('https://fakestoreapi.com/products/categories')
        .then(response => {
            setCategories(response.data);
        })
        .catch (error => {
            console.error(error);
        });
    }

    const all = categories.map((item, index) => {

        return (
            <Card key={index} data={item} image={images[index]}/>
        )
    })

    return(
        <div className='category'>
            {all}
        </div>
    );
}
export default StorePage;