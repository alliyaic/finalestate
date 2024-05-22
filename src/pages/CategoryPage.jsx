
import { Link } from "react-router-dom"
import {useEffect, useState} from 'react';
import axios from 'axios';
import Card from '../components/Сard';
import Electronics from "../assets/images/electronics.jpeg";
import Jewellery from "../assets/images/jewellery.avif";
import Mens from "../assets/images/menss.webp";
import Womens from "../assets/images/womenss.png";
import './CategoryPage.css';
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

function CategoryPage () {
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
export default CategoryPage;