import Card from "../components/card";
import { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
//import Navbar from '../components/Navbar';

function MainPage() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        GetData()
    }, [])

    function GetData() {
        axios.get()
            .then(response => {
                setProducts(response.data);
            })
            .catch (error => {
                console.error(error);
            });
    }

    const all = products.map((item, index) => {

        return (
            <Card key={index} data={item} />
        )
    })

    return (
        <div className="list">
            {all}
        </div>
    );
}

export default MainPage;